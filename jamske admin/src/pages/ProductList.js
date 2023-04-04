import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import Product from "../images/Vegetable-1.svg";

export default function ProductList() {
    const options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 10,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Products_List = [
        {
            Product_name: "Broccoli Crowns (Avg. 0.7lb)",
            Seller: "Macy’s",
            Categories: "Vegetables",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            Product_name: "Broccoli Crowns (Avg. 0.7lb)",
            Seller: "Macy’s",
            Categories: "Vegetables",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            Product_name: "Broccoli Crowns (Avg. 0.7lb)",
            Seller: "Macy’s",
            Categories: "Vegetables",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
        {
            Product_name: "Broccoli Crowns (Avg. 0.7lb)",
            Seller: "Macy’s",
            Categories: "Vegetables",
            Amount: "$37.50",
            Date: "01/10/2021",
        },
    ];
    const columns = [
        {
            name: "Product",
            label: "Product",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "table-head-class" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <span className="comn-table-photo">
                            <img src={Product} className="img-fluid" alt="Profile" />
                        </span>
                    );
                },
            },
        },
        {
            name: "Product_name",
            label: "Product name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Seller",
            label: "Seller",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Categories",
            label: "Categories",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class received-class">Active</span>;
                },
            },
        },

        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            label: "Action",
            name: "Action",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="border-0 bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#232222" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </button>
                            <button className="ms-2 border-0 bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#06038D" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                    />
                                </svg>
                            </button>
                        </div>
                    );
                },
            },
        },
    ];
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Products List</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <select className="form-select login-comn-input" name="customer-list">
                                            <option>All category</option>
                                            <option>123</option>
                                            <option>456</option>
                                        </select>
                                        <button className="ms-sm-2 mt-2 mt-sm-0 w-100 btn-comn-class head-btn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Products_List} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
