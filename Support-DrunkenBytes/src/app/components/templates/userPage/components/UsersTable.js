import React from "react";
import { SearchOutlined, CheckOutlined  } from "@ant-design/icons";
import { Button, Input, Space, Table, notification } from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Link from "next/link";

const NftTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [filters, setFilters] = useState({});
  const searchInput = useRef(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setFilters({});
    setRefreshKey(refreshKey + 1);
  }, [props.clearFilters]);

  useEffect(() => {
    const getData = async () => {
      let filterParams = [];
      for (const key in filters) {
        filterParams.push(JSON.stringify({ [key]: filters[key] }));
      }
      const usersData = await sendRequest(
        `/user/get-all-users?q=${filterParams}&page=${currentPage}&size=${pageSize}`
      );
      setTableData(usersData.users);
      setTotalUsers(usersData.totalUsers);
    };
    getData();
  }, [currentPage, pageSize, filters, refresh]);

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

  const verifyUser = async (id) => {
    const result = await sendRequest(
      `/user/verify-user/${id}`,
      "PATCH"
    );
    if (!error) {
      notification.success({
        message: "Success",
        description: result.message,
        placement: "top",
        className: "error-notification"
      });
      setRefresh(!refresh);
    }
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
      title: "Business Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      render: (_, { _id, name }) => <Link href={`/users/${_id}`}>{name}</Link>,
    },
    {
      title: "Account Address",
      dataIndex: "accountAddress",
      key: "accountAddress",
      ...getColumnSearchProps("accountAddress"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Wallet Balance",
      dataIndex: "walletBalance",
      key: "walletBalance",
      render: (_, { walletBalance }) => (
        <div>{`${Number(walletBalance).toFixed(10)} ETH`}</div>
      ),
    },
    {
      title: "Commission Percent",
      dataIndex: "commissionPercent",
      key: "commissionPercent",
      ...getColumnSearchProps("commissionPercent"),
      render: (_, { commissionPercent }) => (
        <div>{`${commissionPercent}%`}</div>
      ),
    },
    {
      title: "Verified By",
      dataIndex: "verifiedBy",
      key: "verifiedBy",
      render: (_, { verifiedBy, verified }) =>
        verified ? (
          <Link href={`/support-users/${verifiedBy._id}`}>
            {verifiedBy.name}
          </Link>
        ) : (
          <div>Not Verified Yet</div>
        ),
    },
    {
      title: "Verify",
      dataIndex: "verified",
      key: "verified",
      render: (_, record) => (
        <Button
          type="text"
          onClick={() => verifyUser(record._id)}
          disabled={record.verified}
        >
          <CheckOutlined  />
        </Button>
      ),
    },
  ];

  return (
    <Table
      key={refreshKey}
      size="small"
      columns={columns}
      filters={filters}
      dataSource={tableData}
      pagination={{
        size: "default",
        total: totalUsers,
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
    />
  );
};

export default NftTable;
