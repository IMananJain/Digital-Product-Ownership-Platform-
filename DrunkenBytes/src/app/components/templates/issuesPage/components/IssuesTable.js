import React from "react";
import { SearchOutlined, FilterFilled, CheckOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Space,
  Table,
  notification,
  DatePicker,
  Radio,
  Modal,
} from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Link from "next/link";
import moment from "moment";

const IssuesTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState([]);
  const [totalIssues, setTotalIssues] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({});
  const searchInput = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [sort, setSort] = useState({});

  useEffect(() => {
    setFilters({});
    setSort({});
    setRefreshKey(refreshKey + 1);
  }, [props.clearFilters]);

  useEffect(() => {
    const getData = async () => {
      let filterParams = [];
      for (const key in filters) {
        filterParams.push(JSON.stringify({ [key]: filters[key] }));
      }
      const issuesData = await sendRequest(
        `/issue/get-issues?filters=${filterParams}&sort=${JSON.stringify(
          sort
        )}&page=${currentPage}&size=${pageSize}`
      );
      setTableData(issuesData.issues);
      setTotalIssues(issuesData.totalIssues);
    };
    getData();
  }, [currentPage, pageSize, filters, refresh, sort]);

  const solveIssue = async (id) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure you have resolved the issue and want to close it?`,
      okText: "Yes",
      cancelText: "No",
      className: "confirm-modal",
      async onOk() {
        try {
          await sendRequest(`/issue/solve-issue/${id}`, "PATCH");
          if (!error) {
            notification.success({
              message: "Success",
              description: "Issue Solved Successfully",
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
      title: "Transaction Hash",
      dataIndex: "txId",
      key: "txId",
      ...getColumnSearchProps("txId"),
      render: (_, { txId }) => (
        <Link href={`/issues/nft/${txId}`}>
          {`${txId.slice(0, 4)}...${txId.slice(-6)}`}
        </Link>
      ),
    },
    {
      title: "Token ID",
      dataIndex: "tokenId",
      key: "tokenId",
      sorter: true,
      ...getColumnSearchProps("tokenId"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Date Created",
      dataIndex: "date",
      key: "date",
      ...getColumnDateProps("dateCreated"),
      sorter: true,
      render: (_, { date }) => (
        <div>
          {new Date(date).getDate() +
            "/" +
            (new Date(date).getMonth() + 1) +
            "/" +
            new Date(date).getFullYear() +
            " " +
            new Date(date).getHours() +
            ":" +
            new Date(date).getMinutes() +
            ":" +
            new Date(date).getSeconds()}
        </div>
      ),
    },
    {
      title: "Solve Issue",
      dataIndex: "_id",
      key: "_id",
      ...getColumnRadioProps("isSolved", [
        { title: "Solved", value: true },
        { title: "Not Solved", value: false },
      ]),
      render: (_, { _id, isSolved }) =>
        isSolved ? (
          <div>Already Solved</div>
        ) : (
          <Button
            type="text"
            onClick={() => {
              solveIssue(_id);
            }}
          >
            <CheckOutlined />
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
        total: totalIssues,
        pageSize: pageSize,
        showSizeChanger: true,
        responsive: true,
        onChange: onPageChangeHandler,
      }}
      bordered
      scroll={{
        x: "max-content",
      }}
      rowKey="_id"
      loading={isLoading}
      onChange={(pagination, filters, sorter) => {
        setSort({ [sorter.field]: sorter.order === "ascend" ? 1 : -1 });
      }}
    />
  );
};

export default IssuesTable;
