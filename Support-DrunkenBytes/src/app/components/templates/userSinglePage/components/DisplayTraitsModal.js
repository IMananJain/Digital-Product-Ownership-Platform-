import React from 'react'
import { Modal, Table } from "antd";
import styles from "../stylesheets/displayTraitsModal.module.css";

const DisplayTraitsModal = (props) => {
    const nestedColumns = [
        {
          title: 'Key',
          dataIndex: 'key',
          key: 'key',
          width: '50%',
        },
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'value',
          width: '50%',
        },
      ];
    return (
        <Modal
            title="Traits"
            destroyOnClose={true}
            closable
            onClose={() => {
                props.setIsModalVisible(false);
                props.setModalData([]);
            }}
            onCancel={() => {
                props.setIsModalVisible(false);
                props.setModalData([]);
            }}
            open={props.isModalVisible}
            className="acceptandSignModal"
            footer={null}
        >
            <div className={`${styles.modalText} tab-pane`}>
                <Table columns={nestedColumns} dataSource={props.modalData} pagination={false} className="nested-table" bordered key="key"/>;
            </div>
        </Modal>
    )
}

export default DisplayTraitsModal