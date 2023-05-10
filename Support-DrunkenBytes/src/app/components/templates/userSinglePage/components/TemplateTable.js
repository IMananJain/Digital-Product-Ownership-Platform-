import React from "react";
import {
  SearchOutlined,
  FilterFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, notification, Radio } from "antd";
import { useRef, useState, useEffect } from "react";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import DisplayTraitsModal from "./DisplayTraitsModal";
import CustomButton from "@/app/components/elements/CustomButton";

const TemplateTable = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [tableData, setTableData] = useState(props.data);
  const [totalTemplates, setTotalTemplates] = useState(props.totalTemplates);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({createdBy: props.id});
  const searchInput = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [sort, setSort] = useState({})

  useEffect(() => {
    setFilters({createdBy: props.id});
    setSort({});
    setRefreshKey(refreshKey + 1);
  }, [props.clearFilters]);

  useEffect(() => {
    const getData = async () => {
      let filterParams = [];
      for (const key in filters) {
        filterParams.push(JSON.stringify({ [key]: filters[key] }));
      }
      const templatesData = await sendRequest(
        `/template/get-all-templates?filters=${filterParams}&sort=${JSON.stringify(sort)}&page=${currentPage}&size=${pageSize}`
      );
      setTableData(templatesData.templates);
      setTotalTemplates(templatesData.totalTemplates);
    };
    getData();
  }, [currentPage, pageSize, filters, refresh, sort]);

  const deleteTemplate = async (id) => {
    try {
      await sendRequest(`/template/${id}`, "DELETE");
      if (!error) {
        notification.success({
          message: "Success",
          description: "Template Deleted Successfully",
          placement: "top",
          className: "error-notification",
        });
        setRefresh(!refresh);
      }
    } catch (err) {
      console.log(err);
    }
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "NFT Type",
      dataIndex: "nftType",
      key: "nftType",
      ...getColumnRadioProps("nftType", [
        { title: "Product NFT", value: "product" },
        { title: "Document NFT", value: "document" },
        { title: "Other", value: "other" },
      ]),
    },
    {
      title: "Traits",
      dataIndex: "traits",
      key: "traits",
      render: (text, record) => (
        <CustomButton
          type="Gradient"
          text="View Traits"
          onClickHandler={() => {
            setModalData(record.traits);
            setIsModalVisible(true);
          }}
        />
      ),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      key: "_id",
      render: (_, { _id }) => (
        <Button type="text" onClick={() => deleteTemplate(_id)}>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        key={refreshKey}
        size="small"
        columns={columns}
        dataSource={tableData}
        pagination={{
          size: "default",
          total: totalTemplates,
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
      <DisplayTraitsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalData={modalData}
        setModalData={setModalData}
      />
    </>
  );
};

export default TemplateTable;
