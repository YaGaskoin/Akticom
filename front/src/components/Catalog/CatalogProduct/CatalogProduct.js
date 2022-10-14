import './CatalogProduct.scss';
import React from 'react'
import {Card, Descriptions} from 'antd';


const CatalogProduct = (props) => {
    return (
        <Card
            style={{marginBottom: 16}}
            type="inner"
            title={props.name}
            size={'small'}
        >
            <Descriptions bordered column={1} size={'small'}>
                <Descriptions.Item span={2} label="Код">{props.aricle}</Descriptions.Item>
                <Descriptions.Item span={2} label="price">{props.price}</Descriptions.Item>
                <Descriptions.Item span={2} label="Цена по СП">{props.special_price}</Descriptions.Item>
                <Descriptions.Item span={2} label="Количество">{props.count}</Descriptions.Item>
                <Descriptions.Item span={2} label="Ед. измерения">{props.measurement}</Descriptions.Item>
                <Descriptions.Item span={2} label="Совместные покупки">{props.united_pruchases}</Descriptions.Item>
                <Descriptions.Item span={2} label="Показывать на главной">{props.show_main? 'Да': 'Нет'}</Descriptions.Item>
                <Descriptions.Item span={2} label="Описание">{props.description}</Descriptions.Item>
                <Descriptions.Item span={2} label="1ый Уровень">{props.category}</Descriptions.Item>
                <Descriptions.Item span={2} label="2ой Уровень">{props.parent_category}</Descriptions.Item>
                <Descriptions.Item span={2} label="3ий Уровень">{props.grand_category}</Descriptions.Item>

            </Descriptions>

        </Card>
    )
}

export default CatalogProduct;
