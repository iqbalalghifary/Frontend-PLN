import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from 'src/api'
import { 
  CCard, 
  CCardBody, 
  CCol, 
  CCardHeader, 
  CRow,
  CFormInput,
  CFormLabel,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import {
  cilSearch
  
} from "@coreui/icons";
// import {
//   CChartBar,
//   CChartDoughnut,
//   CChartLine,
//   CChartPie,
//   CChartPolarArea,
//   CChartRadar,
// } from '@coreui/react-chartjs'
// import { DocsCallout } from 'src/components'

const Charts = () => {
//   const random = () => Math.round(Math.random() * 100)
  const [pendaftar, setPendaftar] = useState([])
  const [nip, setNIP] = useState("")
  const readPendaftar = () => 
  axios.get(
    `${url}/api/pendaftars?populate[pesertas][populate]=pegawai&populate=penilaians`)

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPendaftar();
      const arr = result.data.data;
    console.log(arr)
      setPendaftar(arr);
    };
    fetchData();
  }, []);
  
  function dataPeserta() { 
    const idx = pendaftar.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    console.log(idx)
    // document.getElementById("nama").value = pendaftar[idx].attributes.pegawai.data.attributes.nama
    // document.getElementById("jabatan").value = pendaftar[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
    // document.getElementById("grade").value = pendaftar[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
          <CIcon icon={cilSearch}/>
            <strong>  Cari Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CFormLabel htmlFor="nip" className="col-sm-3 col-form-label"><strong>Input NIP Peserta</strong></CFormLabel>
            </CRow>
            <CRow className="mb-1">
              <CCol>
                <CFormInput type="text" id="nip" placeholder="Input NIP" 
                  value={nip}
                  onChange={(e) => {
                  setNIP(e.target.value);
                  console.log(nip)
              }}/>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton type="submit" color="primary" variant="" id="cek" onClick={() => dataPeserta()}>
                  Cari Peserta
                </CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      No
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      NIP
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Nama</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Jabatan Proyeksi</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Tgl Uji
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Hasil Nilai</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Lihar Report Nilai</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                </CTable>
                </CCardBody>
                </CCard>
      </CCol>
    </CRow>
    // <CRow>
    //   {/* <CCol xs={12}>
    //     <DocsCallout
    //       name="Chart"
    //       href="components/chart"
    //       content="React wrapper component for Chart.js 3.0, the most popular charting library."
    //     />
    //   </CCol> */}
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Pencarian FIt & Proper</CCardHeader>
    //       <CCardBody>
    //         <CChartBar
    //           data={{
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //               {
    //                 label: 'GitHub Commits',
    //                 backgroundColor: '#f87979',
    //                 data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
    //               },
    //             ],
    //           }}
    //           labels="months"
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Line Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartLine
    //           data={{
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //               {
    //                 label: 'My First dataset',
    //                 backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //                 borderColor: 'rgba(220, 220, 220, 1)',
    //                 pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //                 pointBorderColor: '#fff',
    //                 data: [random(), random(), random(), random(), random(), random(), random()],
    //               },
    //               {
    //                 label: 'My Second dataset',
    //                 backgroundColor: 'rgba(151, 187, 205, 0.2)',
    //                 borderColor: 'rgba(151, 187, 205, 1)',
    //                 pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    //                 pointBorderColor: '#fff',
    //                 data: [random(), random(), random(), random(), random(), random(), random()],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Doughnut Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartDoughnut
    //           data={{
    //             labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    //             datasets: [
    //               {
    //                 backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
    //                 data: [40, 20, 80, 10],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Pie Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartPie
    //           data={{
    //             labels: ['Red', 'Green', 'Yellow'],
    //             datasets: [
    //               {
    //                 data: [300, 50, 100],
    //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Polar Area Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartPolarArea
    //           data={{
    //             labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    //             datasets: [
    //               {
    //                 data: [11, 16, 7, 3, 14],
    //                 backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Radar Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartRadar
    //           data={{
    //             labels: [
    //               'Eating',
    //               'Drinking',
    //               'Sleeping',
    //               'Designing',
    //               'Coding',
    //               'Cycling',
    //               'Running',
    //             ],
    //             datasets: [
    //               {
    //                 label: 'My First dataset',
    //                 backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //                 borderColor: 'rgba(220, 220, 220, 1)',
    //                 pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //                 pointBorderColor: '#fff',
    //                 pointHighlightFill: '#fff',
    //                 pointHighlightStroke: 'rgba(220, 220, 220, 1)',
    //                 data: [65, 59, 90, 81, 56, 55, 40],
    //               },
    //               {
    //                 label: 'My Second dataset',
    //                 backgroundColor: 'rgba(151, 187, 205, 0.2)',
    //                 borderColor: 'rgba(151, 187, 205, 1)',
    //                 pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    //                 pointBorderColor: '#fff',
    //                 pointHighlightFill: '#fff',
    //                 pointHighlightStroke: 'rgba(151, 187, 205, 1)',
    //                 data: [28, 48, 40, 19, 96, 27, 100],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
  )
}

export default Charts
