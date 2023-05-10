import React from "react";
import { SearchOutlined, CloseOutlined, FilterFilled } from "@ant-design/icons";
import { Button, Input, Space, Table, DatePicker, Radio, notification, Modal } from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Link from "next/link";
import moment from "moment";

const TicketTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState([]);
  const [totalTickets, setTotalTickets] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState();
  const searchInput = useRef(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [sort, setSort] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setFilters();
    setSort({});
    setRefreshKey(refreshKey + 1);
  }, [props.clearFilters]);

  useEffect(() => {
    const getData = async () => {
      let filterParams = [];
      for (const key in filters) {
        filterParams.push(JSON.stringify({ [key]: filters[key] }));
      }
      const ticketsData = await sendRequest(
        `/ticket/get-tickets?filters=${filterParams}&sort=${JSON.stringify(
          sort
        )}&page=${currentPage}&size=${pageSize}`
      );
      console.log(ticketsData);
      setTableData(ticketsData.tickets);
      setTotalTickets(ticketsData.totalTickets);
    };
    getData();
  }, [currentPage, pageSize, filters, sort, refresh]);

  const closeTicket = async (id) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure that you want to close this ticket?`,
      okText: "Yes",
      cancelText: "No",
      className: "confirm-modal",
      async onOk() {
        try {
          await sendRequest(`/ticket/${id}/close/`, "PUT");
          if (!error) {
            notification.success({
              message: "Success",
              description: "Ticket Closed Successfully",
              placement: "top",
              className: "error-notification",
            });
            setRefresh(!refresh);
          }
        } catch (err) {}
      },
      onCancel() {},
    });
    
  };

  const handleSearch = async (close, selectedKeys, dataIndex) => {
    close();
    setFilters((prevState) => ({
      ...prevState,
      [dataIndex]: selectedKeys[0],
    }));
  };
  const handleReset = (close, dataIndex, setSelectedKeys) => {
    setSelectedKeys([]);
    close();
    const { [dataIndex]: tmp, ...rest } = filters;
    console.log(rest);
    setFilters(rest);
  };
  const onPageChangeHandler = async (current, size) => {
    setCurrentPage(current);
    setPageSize(size);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(close, selectedKeys, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(close, selectedKeys, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              color: "var(--white)",
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters && handleReset(close, dataIndex, setSelectedKeys);
            }}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });

  const getColumnRadioProps = (dataIndex, options) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Radio.Group
          onChange={(e) => setSelectedKeys([e.target.value])}
          value={selectedKeys[0]}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        >
          {options.map((data, idx) => {
            return (
              <Radio value={data.value} key={idx}>
                {data.title}
              </Radio>
            );
          })}
        </Radio.Group>
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(close, selectedKeys, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              color: "var(--white)",
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters && handleReset(close, dataIndex, setSelectedKeys);
            }}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <FilterFilled
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex] === value,
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });

  const getColumnDateProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }}>
        <DatePicker
          style={{ width: 188, marginBottom: 8, display: "block" }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0] ? moment(selectedKeys[0], "YYYY-MM-DD") : null}
          format="YYYY-MM-DD"
          onChange={(date, dateString) =>
            setSelectedKeys(dateString ? [dateString] : [])
          }
          onOk={() => handleSearch(close, selectedKeys, dataIndex)}
          allowClear={false}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(close, selectedKeys, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            handleReset(close, dataIndex, setSelectedKeys);
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <FilterFilled style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      const regex = new RegExp(
        moment(value, "YYYY-MM-DD").format("YYYY-MM-DD")
      );
      return regex.test(record[dataIndex]);
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => moment(text, "YYYY-MM-DD").format("DD/MM/YYYY"),
  });

  const columns = [
    {
      title: "Ticket ID",
      dataIndex: "_id",
      key: "_id",
      ...getColumnSearchProps("_id"),
      render: (_, { _id }) => <Link href={`/tickets/${_id}`}>{_id}</Link>,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      ...getColumnSearchProps("subject"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
      ...getColumnDateProps("dateCreated"),
      sorter: true,
      render: (_, { dateCreated }) => (
        <div>
          {new Date(dateCreated).getDate() +
            "/" +
            (new Date(dateCreated).getMonth() + 1) +
            "/" +
            new Date(dateCreated).getFullYear() +
            " " +
            new Date(dateCreated).getHours() +
            ":" +
            new Date(dateCreated).getMinutes() +
            ":" +
            new Date(dateCreated).getSeconds()}
        </div>
      ),
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      ...getColumnDateProps("lastUpdated"),
      sorter: true,
      render: (_, { lastUpdated }) => (
        <div>
          {new Date(lastUpdated).getDate() +
            "/" +
            (new Date(lastUpdated).getMonth() + 1) +
            "/" +
            new Date(lastUpdated).getFullYear() +
            " " +
            new Date(lastUpdated).getHours() +
            ":" +
            new Date(lastUpdated).getMinutes() +
            ":" +
            new Date(lastUpdated).getSeconds()}
        </div>
      ),
    },
    {
      title: "Concerned Department",
      dataIndex: "type",
      key: "type",
      ...getColumnRadioProps("type", [
        { title: "Sales", value: "sales" },
        { title: "Support", value: "support" },
      ]),
      render: (_, { type }) =>
        type === "support" ? <div>Support</div> : <div>Sales</div>,
    },
    {
      title: "Close Ticket",
      dataIndex: "_id",
      key: "_id",
      ...getColumnRadioProps("isSolved", [
        { title: "Closed", value: true },
        { title: "Open", value: false },
      ]),
      render: (_, { _id, isSolved }) =>
        isSolved ? (
          <div>Already Closed</div>
        ) : (
          <Button
            type="text"
            onClick={() => {
              closeTicket(_id);
            }}
          >
            <CloseOutlined />
          </Button>
        ),
    },
  ];

  return (
    <Table
      key={refreshKey}
      size="small"
      columns={columns}
      dataSource={tableData}
      pagination={{
        size: "default",
        total: totalTickets,
        pageSize: pageSize,
        showSizeChanger: true,
        responsive: true,
        onChange: onPageChangeHandler,
      }}
      bordered
      scroll={{
        x: "max-content",
      }}
      loading={isLoading}
      rowKey="_id"
      onChange={(pagination, filters, sorter) => {
        setSort({ [sorter.field]: sorter.order === "ascend" ? 1 : -1 });
      }}
    />
  );
};

export default TicketTable;
