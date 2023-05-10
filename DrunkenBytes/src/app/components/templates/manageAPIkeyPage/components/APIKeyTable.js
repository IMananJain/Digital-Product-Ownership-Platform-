import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, notification, Modal } from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { DeleteOutlined } from "@ant-design/icons";

const APIKeyTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState([]);
  const [totalApiKeys, setTotalApiKeys] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState();
  const [refresh, setRefresh] = useState(false);
  const searchInput = useRef(null);
  const [sort, setSort] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setFilters({});
    setRefreshKey(refreshKey + 1);
    // setSort({});
  }, [props.clearFilters]);

  useEffect(() => {
    const getData = async () => {
      let filterParams = [];
      for (const key in filters) {
        filterParams.push(JSON.stringify({ [key]: filters[key] }));
      }
      const apiKeysData = await sendRequest(
        `/api-key/get-api-keys?filters=${filterParams}&sort=${JSON.stringify(
          sort
        )}&page=${currentPage}&size=${pageSize}`
      );
      setTableData(apiKeysData.apiKeys);
      setTotalApiKeys(apiKeysData.totalApiKeys);
    };
    getData();
  }, [currentPage, pageSize, filters, props.modalOpen, refresh, sort]);

  const deleteApiKey = async (apiKey, name) => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure that you want to delete API key with name ${name}?`,
      okText: "Yes",
      cancelText: "No",
      className: "confirm-modal",
      async onOk() {
        try {
          await sendRequest(`/api-key/delete-api-key/${apiKey}`, "DELETE");
          if (!error) {
            notification.success({
              message: "Success",
              description: "API Key Deleted Successfully",
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
  const columns = [
    {
      title: "API Key Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "API Key",
      dataIndex: "apiKey",
      key: "apiKey",
      ...getColumnSearchProps("apiKey"),
    },
    {
      title: "Delete",
      dataIndex: "apiKey",
      key: "apiKey",
      render: (_, { apiKey, name }) => (
        <Button type="text" onClick={() => deleteApiKey(apiKey)}>
          <DeleteOutlined />
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
        total: totalApiKeys,
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
      // onChange={(pagination, filters, sorter) => {
      //   setSort({ [sorter.field]: sorter.order === "ascend" ? 1 : -1 });
      // }}
    />
  );
};

export default APIKeyTable;
