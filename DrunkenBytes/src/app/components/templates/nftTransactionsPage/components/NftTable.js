import React from "react";
import { SearchOutlined, RedoOutlined, FilterFilled } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, DatePicker, Radio } from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Link from "next/link";
import moment from "moment";

const NftTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState();
  const searchInput = useRef(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [sort, setSort] = useState({});

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
      const transactionsData = await sendRequest(
        `/nft-transaction/get-transactions?filters=${filterParams}&sort=${JSON.stringify(
          sort
        )}&page=${currentPage}&size=${pageSize}`
      );
      setTableData(transactionsData.transactions);
      setTotalTransactions(transactionsData.totalTransactions);
    };
    getData();
  }, [currentPage, pageSize, filters, sort]);

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
      title: "Transaction Hash",
      dataIndex: "txId",
      key: "txId",
      ...getColumnSearchProps("txId"),
      render: (_, { txId }) => (
        <Link href={`/transactions/nft/${txId}`}>
          {`${txId.slice(0, 4)}...${txId.slice(-6)}`}
        </Link>
      ),
    },
    {
      title: "Receiver Wallet Address",
      dataIndex: "receiverWalletAddress",
      key: "receiverWalletAddress",
      ...getColumnSearchProps("receiverWalletAddress"),
      render: (_, { receiverWalletAddress }) => (
        <div>
          {`${receiverWalletAddress.slice(
            0,
            5
          )}...${receiverWalletAddress.slice(-8)}`}
        </div>
      ),
    },
    {
      title: "Token ID",
      dataIndex: "tokenId",
      key: "tokenId",
      ...getColumnSearchProps("tokenId"),
      sorter: true,
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
      title: "Nft Type",
      dataIndex: "nftType",
      key: "nftType",
      ...getColumnRadioProps("nftType", [
        { title: "Product NFT", value: "product" },
        { title: "Document NFT", value: "document" },
        { title: "Other", value: "other" },
      ]),
      render: (_, { nftType }) => <div>{nftType.toString().replace(/^\w/, c => c.toUpperCase())}</div>,
    },
    {
      title: "NFT Name",
      dataIndex: "nftName",
      key: "nftName",
      ...getColumnSearchProps("nftName"),
    },
    {
      title: "Custom Image Used",
      dataIndex: "useCustomImage",
      key: "useCustomImage",
      ...getColumnRadioProps("useCustomImage", [
        { title: "Custom Image used", value: true },
        { title: "Auto Generated Image Used", value: false },
      ]),
      render: (_, { useCustomImage }) => <div>{useCustomImage.toString().replace(/^\w/, c => c.toUpperCase())}</div>,

    },
    {
      title: "Soulbound",
      dataIndex: "isTransferable",
      key: "isTransferable",
      ...getColumnRadioProps("isTransferable", [
        { title: "Transferable", value: true },
        { title: "Not Transferable", value: false },
      ]),
      render: (_, { isTransferable }) => <div>{isTransferable.toString().replace(/^\w/, c => c.toUpperCase())}</div>,
    },
    {
      title: "Permanent",
      dataIndex: "isBurnable",
      key: "isBurnable",
      ...getColumnRadioProps("isBurnable", [
        { title: "Burnable", value: true },
        { title: "Not Burnable", value: false },
      ]),
      render: (_, { isBurnable }) => <div>{isBurnable.toString().replace(/^\w/, c => c.toUpperCase())}</div>,
    },
    {
      title: "Burn After",
      dataIndex: "burnAfter",
      key: "burnAfter",
      ...getColumnDateProps("burnAfter"),
      render: (_, { burnAfter }) =>
        burnAfter === null ? (
          <div> Permanent </div>
        ) : (
          <div>
            {new Date(burnAfter).getDate() +
              "/" +
              (new Date(burnAfter).getMonth() + 1) +
              "/" +
              new Date(burnAfter).getFullYear() +
              " " +
              new Date(burnAfter).getHours() +
              ":" +
              new Date(burnAfter).getMinutes() +
              ":" +
              new Date(burnAfter).getSeconds()}
          </div>
        ),
    },
    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      ...getColumnRadioProps("transactionType", [
        { title: "Mint NFT", value: "Mint" },
        { title: "Burn NFT", value: "Burn" },
      ]),
      render: (_, { transactionType }) => (
        <Tag
          color={
            transactionType === "Mint"
              ? "green"
              : "volcano"
          }
          key={transactionType}
        >
          {transactionType.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnRadioProps("status", [
        { title: "Success", value: "Success" },
        { title: "Pending", value: "Pending" },
        { title: "Failed", value: "Failed" },
      ]),
      render: (_, { status }) => (
        <Tag
          color={
            status === "Success"
              ? "green"
              : status === "Pending"
              ? "geekblue"
              : "volcano"
          }
          key={status}
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      sorter: true,
      render: (_, { value }) => <div>{`${value} ETH`}</div>,
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
        total: totalTransactions,
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

export default NftTable;
