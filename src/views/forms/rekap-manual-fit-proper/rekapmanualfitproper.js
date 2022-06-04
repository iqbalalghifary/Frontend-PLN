import { cilSpreadsheet, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CFormInput,
  CFormLabel,
  CForm,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { Link } from 'react-router-dom'

export default function rekapmanualfitproper(){

 const [hari, setHari] =useState('');
const turatur = ()=>{
   
let date = new Date();
let tanggal = date.getDate();
let bulan = date.getMonth();
let tahun = date.getFullYear();
    if(tanggal<=9){
      const full = "0"+tanggal+"-0"+bulan+"-"+tahun;
      setHari(full);
    }else if(tanggal>9){
      const full = tanggal+"-"+bulan+"-"+tahun;
      setHari(full);
    }
}


useEffect(()=>{
    turatur();
})


  return (
    <CRow>
      <CCol xs={12}>
        <Link to={'/dashboard'}>
            <CButton className='btn btn-md btn-dark text-white mb-2'>
              Kembali
            </CButton>
        </Link>
        <CCard className="mb-4">
        <CCardHeader>
              <strong>Rekap Penilaian Manual Peserta Fit Proper</strong>
            </CCardHeader>  
          <CCardBody>
          <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-1 col-form-label" >
                    NIP
                  </CFormLabel>
                  <CCol sm={3}>
                    <CFormInput type="text" id="inputEmail3" placeholder='Masukkan NIP'/>
                  </CCol>
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-1 col-form-label" >
                    Jabatan Proyeksi
                  </CFormLabel>
                  <CCol sm={3}>
                    <CFormInput type="text" id="inputEmail3" placeholder='Jabatan Proyeksi'/>
                  </CCol>
                  <CCol sm={2}>
                    <CFormInput type="text" id="inputEmail3" value={hari} disabled/>
                  </CCol>  
                  <CCol>
                    <CButton type='submit' color="warning" variant="outline">Cek</CButton>
                  </CCol>
                </CRow>
              </CForm>
              <CFormLabel htmlFor="inputEmail3" className="col-sm-1 col-form-label" placeholder='Masukkan NIP'>
                    REPORT
              </CFormLabel>
              <CTable striped style={{ display:'block', 'overflow-x':'scroll'}}>
              <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell rowSpan={2}>No</CTableHeaderCell>
                    <CTableHeaderCell rowSpan={2}>Tim Penilai</CTableHeaderCell>
                    <CTableHeaderCell colSpan={2}>Pengetahuan / Knowledge</CTableHeaderCell>
                    <CTableHeaderCell colSpan={2}>Keterampilan / Skill </CTableHeaderCell>
                    <CTableHeaderCell rowSpan={2}>Rekomendasi Penguji </CTableHeaderCell>
                    <CTableHeaderCell rowSpan={2}>Kelemahan yang harus diperbaiki</CTableHeaderCell>
                    <CTableHeaderCell rowSpan={2}>Kelebihan yang dimiliki</CTableHeaderCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Pengetahuan terhadap proses bisnis (bobot 40%)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pengetahuan terhadap tugas pokok dan tanggung jawab / Job Desk yang terkait dengan jabatan yang di proyeksikan (bobot 60%)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pemecahan masalah / Pengambilan  Keputusan (bobot 60%)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Komunikasi dengan Pihak Eksternal (bobot 40%)</CTableHeaderCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">4</CTableHeaderCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                  <CTableDataCell><CFormInput type="text" id="inputEmail3" /></CTableDataCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
              </CTableBody>
            </CTable>
          </CCardBody>
          </CCard>
      </CCol>
    </CRow>
  )
}
