import React, { useState, useEffect } from "react";
import * as api from '../../../api';
import {
  CAvatar,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  //CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
//import { CChartLine } from '@coreui/react-chartjs'
//import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  // cibGoogle,
  // cibFacebook,
  // cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  // cibTwitter,
  // cilCloudDownload,
  cilPeople,
  // cilUser,
  // cilUserFemale,
} from "@coreui/icons";


const ButtonGroups = () => {
  // const tableExample = [
  //   {
  //     avatar: { src: avatar1, status: "success" },
  //     user: {
  //       name: "Yiorgos Avraamu",
  //       new: true,
  //       registered: "Jan 1, 2021",
  //     },
  //     country: { name: "USA", flag: cifUs },
  //     usage: {
  //       value: 50,
  //       period: "Jun 11, 2021 - Jul 10, 2021",
  //       color: "success",
  //     },
  //     payment: { name: "Mastercard", icon: cibCcMastercard },
  //     activity: "10 sec ago",
  //   },
  //   {
  //     avatar: { src: avatar2, status: "danger" },
  //     user: {
  //       name: "Avram Tarasios",
  //       new: false,
  //       registered: "Jan 1, 2021",
  //     },
  //     country: { name: "Brazil", flag: cifBr },
  //     usage: {
  //       value: 22,
  //       period: "Jun 11, 2021 - Jul 10, 2021",
  //       color: "info",
  //     },
  //     payment: { name: "Visa", icon: cibCcVisa },
  //     activity: "5 minutes ago",
  //   },
  // ];

  const [peserta, setPeserta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readPenguji();
      const arr = result.data.data;
    console.log(arr)
     setPeserta(arr);
    };
    fetchData();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Data Penguji</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      No
                    </CTableHeaderCell>
                    <CTableHeaderCell>Nama</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      NIP
                    </CTableHeaderCell>
                    <CTableHeaderCell>Jabatan</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Grade
                    </CTableHeaderCell>
                    <CTableHeaderCell>Jenjang</CTableHeaderCell>
                    <CTableHeaderCell>Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                {/* <CTableBody> */}
                  {/* {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody> */}
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};


export default ButtonGroups
