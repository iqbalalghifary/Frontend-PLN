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

  const [penguji, setPenguji] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readPenguji();
      const arr = result.data.data;
    console.log(arr)
     setPenguji(arr);
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
                <CTableBody>
                  {penguji.map((item) => (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                      
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.nama}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.pegawai.data.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                    
                      </CTableDataCell>
                      <CTableDataCell>
                       
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};


export default ButtonGroups
