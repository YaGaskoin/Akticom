import Preloader from "../common/Preloader/Preloader";
import {shopApi} from "../../api/api";
import React, {useEffect, useState} from 'react'
import {Col, PageHeader, Pagination, Row} from "antd";
import CatalogProduct from "./CatalogProduct/CatalogProduct";
import './Catalog.scss';


const Catalog = (props) => {
    let [totalPages, setTotalPages] = useState(1);
    let [isFetching, setFetching] = useState(true)
    let [products, setProducts] = useState([])
    let [page, setPage] = useState(1);

    useEffect(() => {
        shopApi.list(1).then((response) => {
            setProducts(response.results)
            setTotalPages(response.count)
        })
        setFetching(false)
    }, [])

    const onChange = (pageNumber) => {
        setPage(pageNumber)
        setFetching(true)
        shopApi.list(pageNumber).then((response) => {
            setProducts(response.results)
            setFetching(false)
        })
    };

    return (
        <div className={'products-container'}>

            <PageHeader
                className="site-page-header"
                title="Каталог"
            />

           {
            products.length > 0 ? <Pagination current={page} pageSize={10}
                        total={totalPages}
                        onChange={onChange} showSizeChanger={false}/>: null
            }

            <Row gutter={40}>

                {
                    isFetching ?
                        <Preloader/> :
                        products.map((product) => {
                            let parent_category, grand_category = null;
                            product.category.parent_category ?
                                parent_category = product.category.parent_category.name :
                                null
                            product.category.parent_category.parent_category ?
                                grand_category = product.category.parent_category.parent_category.name :
                                null

                            return (

                                <Col span={12}>
                                    <CatalogProduct
                                        key={product.article}
                                        article={product.article}
                                        name={product.name}
                                        price={product.price}
                                        special_price={product.special_price}
                                        count={product.count}
                                        measurement={product.measurement}
                                        united_pruchases={product.united_purchases}
                                        show_main={product.show_main}
                                        description={product.description}
                                        category={product.category.name}
                                        parent_category={parent_category}
                                        grand_category={grand_category}
                                        status={product.status}
                                        edited={product.edited}
                                    />
                                </Col>


                            )
                        })
                }

            </Row>
            {
            products.length > 0 ? <Pagination current={page} pageSize={10}
                        total={totalPages}
                        onChange={onChange} showSizeChanger={false}/>: null
            }

        </div>
    )
}

export default Catalog;