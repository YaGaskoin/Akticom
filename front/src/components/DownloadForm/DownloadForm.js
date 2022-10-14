import {UploadOutlined} from '@ant-design/icons';
import {Button, message, PageHeader, Upload} from 'antd';
import React, {useState} from 'react';
import {shopApi} from "../../api/api";


const DownloadForm = (props) => {
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
        });
        setUploading(true);

        shopApi.upload(formData).then(response => {
            setFileList([]);
            message.success(response.data.message)
        }).catch(() => {
            message.error('Ошибка загрузки')
        }).finally( () => {
            setUploading(false)
        })
    };

    const conf = {
        beforeUpload: (file) => {
            setFileList([file]);
            return false;
        },
        fileList,
        multiple: false,
        maxCount: 1
    };
    return (
        <React.Fragment>
             <PageHeader
                className="site-page-header"
                title="Загрузка файла"
            />
            <Upload {...conf}>
                <Button icon={<UploadOutlined/>}>Select File</Button>
            </Upload>
            <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{
                    marginTop: 16,
                }}
            >
                {uploading ? 'Загружается...' : 'Загрузить'}
            </Button>

        </React.Fragment>
    )
}

export default DownloadForm;