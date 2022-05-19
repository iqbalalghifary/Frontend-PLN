import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormGroup,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const select = () => {
  const [peserta, setPeserta] = useState([])
  const [penguji, setPenguji] = useState([])
  const [nip, setNIP] = useState("")
  const readPeserta = () => axios.get(`${url}/api/pesertas?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade`)
  const readPenguji = () => axios.get(`${url}/api/pengujis?populate=*`)

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await readPeserta();
      const arr = result.data.data;
    console.log(arr)
     setPeserta(arr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await readPenguji();
      const arr2 = result2.data.data;
    console.log(arr2)
     setPenguji(arr2);
    };
    fetchData();
  }, []);
  // const peserta = [{nip:'201511001', nama:'ali', jabatan:'a', grade:'1'},
  //             {nip:'201511002', nama:'budi', jabatan:'b', grade:'2'},
  //             {nip:'201511003', nama:'cecep', jabatan:'a', grade:'3'}]
  

  function dataPeserta() { 
    const idx = peserta.findIndex(object => {
    return nip === document.getElementById("nip").value})
    document.getElementById("nama").value = peserta[idx].attributes.pegawai.data.attributes.nama
    document.getElementById("jabatan").value = peserta[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
    document.getElementById("grade").value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
  }

  const uri = `${url}/api/pendaftars`
  const [pendaftar, setPendaftar] = useState({
    data : {
      urjab :"",
      jenis_fitnproper : "",
      tanggal : "",
      proyeksi_jabatan : "",
      jenjang_jabatan : "",
      file_cv: "",
      file_ppt: "",
      peserta: "",
  }
  })
  
  function submit(e) {
    const idx = peserta.findIndex(object => {
      return nip === document.getElementById("nip").value})
    e.preventDefault();
    axios.post(uri,{
      data : {
        urjab :document.getElementById("urjab").value,
        jenis_fitnproper : document.getElementById("fp").value,
        tanggal : document.getElementById("date").value,
        proyeksi_jabatan : document.getElementById("proyeksi").value,
        jenjang_jabatan : document.getElementById("jenjab").value,
        file_cv: "",
        file_ppt: "",
        peserta: peserta[idx].id,
    }
    })
    .then(res=>{
      console.log(res.data)
    })
    //document.location.reload(true)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
            <strong>Pendaftaran/Updating</strong> <small>Peserta Fit Proper</small>
          </CCardHeader>
          <CCardBody>
          <p id="demo"></p>
          <CForm
                // onSubmit={submitHandler}
                // method="post"
                // encType="multipart/form-data"
                // className="form-horizontal"
              >
            <CRow className="mb-3">
              <CFormLabel htmlFor="nip" className="col-sm-2 col-form-label">NIP</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="nip" placeholder="NIP" 
                  value={nip}
                  onChange={(e) => {
                  setNIP(e.target.value);
                  console.log(nip)
              }}/>
              </CCol>
              <CCol>
                <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => dataPeserta()}>
                  CEK
                </CButton>
              </CCol>
            </CRow>
            
            <CRow className="mb-3">
            <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="nama" placeholder="Nama" disabled/>
            </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="jabatan" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="jabatan" placeholder="Jabatan" disabled/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Grade</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="grade" placeholder="Grade" disabled/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="date" className="col-sm-2 col-form-label">Date</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="date" id="date" />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="proyeksi" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="proyeksi" placeholder="Jabatan Proyeksi"/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="jenjab" className="col-sm-2 col-form-label">Jenjang Jabatan</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="jenjab" className="mb-3" >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="fp" className="col-sm-2 col-form-label">Jenis Fit & Proper</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="fp" className="mb-3" >
                  <option value="1">Reguler</option>
                  <option value="2">Vicon</option>
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="urjab" className="col-sm-2 col-form-label">Pilih Urjab</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="urjab" placeholder="Uraian Jabatan"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="ppt" className="col-sm-2 col-form-label">Upload PPT *.ppt/.pptx</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="file" id="ppt"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="doc" className="col-sm-2 col-form-label">Upload CV *.doc/.docx</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="file" id="doc"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan1" className="col-sm-2 col-form-label">Pewawancara 1</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan1" placeholder="Pewawancara 1"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan2" className="col-sm-2 col-form-label">Pewawancara 2</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan2" placeholder="Pewawancara 2"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan3" className="col-sm-2 col-form-label">Pewawancara 3</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan3" placeholder="Pewawancara 3"/>            
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CFormLabel htmlFor="wan4" className="col-sm-2 col-form-label">Pewawancara 4</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan4" placeholder="Pewawancara 4"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan5" className="col-sm-2 col-form-label">Pewawancara 5</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan5" placeholder="Pewawancara 5"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol sm={1}>
                <CButton type="submit" color="primary" variant="" id="button-addon2" onClick={(e)=>submit(e)}>
                  SAVE
                </CButton>
              </CCol>
              <CCol>
                <CButton type="button" color="secondary" variant="" id="button-addon2">
                  BATAL
                </CButton>
              </CCol>
            </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default select
