import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import Profile from "../images/jamske.svg";

export default function Vendor() {
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
    const Vendor = [
        {
            Photo: "",
            Vendor_Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Vendor_ID: "#439",
        },
        {
            Photo: "",
            Vendor_Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Vendor_ID: "#439",
        },
        {
            Photo: "",
            Vendor_Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Vendor_ID: "#439",
        },
        {
            Photo: "",
            Vendor_Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Vendor_ID: "#439",
        },
    ];
    const columns = [
        {
            name: "Photo",
            label: "Photo",
            options: {
                filter: false,
                sort: false,
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <span className="comn-table-photo">
                            <img src={Profile} className="img-fluid" alt="Profile" />
                        </span>
                    );
                },
            },
        },
        {
            name: "Vendor_Name",
            label: "Vendor Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Mail_ID",
            label: "Mail ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Vendor_ID",
            label: "Vendor ID",
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
                    return <button className="btn-comn-class p-2">View details</button>;
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
                                        <h1 className="mb-0">Vendor List</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="w-100 btn-comn-class head-btn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Vendor} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
