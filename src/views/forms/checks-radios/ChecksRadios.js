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

const daftarFitProper = () => {
  const [peserta, setPeserta] = useState([])
  const [grade, setGrade] = useState([])
  const [nip, setNIP] = useState("")
  const readPeserta = () => 
    axios.get(
      `${url}/api/pesertas?populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade`)
  const readGrade = () => axios.get(`${url}/api/grades?populate=jenjangs`)

  
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
      const result2 = await readGrade();
      const arr2 = result2.data.data;
    console.log(arr2);
    console.log(arr2.length);
     setGrade(arr2);
    };
    fetchData();
  }, []);
  // const peserta = [{nip:'201511001', nama:'ali', jabatan:'a', grade:'1'},
  //             {nip:'201511002', nama:'budi', jabatan:'b', grade:'2'},
  //             {nip:'201511003', nama:'cecep', jabatan:'a', grade:'3'}]
  

  function dataPeserta() { 
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    console.log(idx)
    document.getElementById("nama").value = peserta[idx].attributes.pegawai.data.attributes.nama
    document.getElementById("jabatan").value = peserta[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
    document.getElementById("grade").value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
    dataJenjang()
  }

  function dataJenjang(){
    const idx = grade.findIndex(x => 
      x.attributes.nama_grade === document.getElementById("grade").value)
    console.log(idx)
    console.log(grade[idx].attributes.jenjangs.data[0].attributes.nama_jenjang)
    for (let i = 0; i < grade[idx].attributes.jenjangs.data.length; i++){
      var opt = document.createElement("option")
      opt.text = grade[idx].attributes.jenjangs.data[i].attributes.nama_jenjang
      opt.value = grade[idx].attributes.jenjangs.data[i].attributes.nama_jenjang
      document.getElementById("jenjab").options.add(opt)
      console.log(opt.text)
      console.log(opt.value)
    }
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
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    e.preventDefault();
    axios.post(uri,{
      data : {
        urjab :document.getElementById("urjab").value,
        Jenis_FitnProper : document.getElementById("fp").value,
        tangal : document.getElementById("date").value,
        proyeksi_jabatan : document.getElementById("proyeksi").value,
        jenjang_jabatan : document.getElementById("jenjab").value,
        file_ppt : document.getElementById("ppt").value,
        file_cv : document.getElementById("doc").value,
        pesertas: peserta[idx].id,
    }
    })
    .then(res=>{
      console.log(res.data)
    })
    console.log(document.getElementById("ppt").value)
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
                <CFormSelect id="jenjab" className="mb-3">
                  <option disabled>Pilih...</option>
                  <CDropdownDivider />
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="fp" className="col-sm-2 col-form-label">Jenis Fit & Proper</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="fp" className="mb-3" >
                  <option disabled>Pilih...</option>
                  <CDropdownDivider />
                  <option value="Regular">Reguler</option>
                  <option value="Vicon">Vicon</option>
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
              <CFormLabel htmlFor="wan1" className="col-sm-2 col-form-label">Penilaian pertama</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan1" placeholder="Masukkan Nilai disini"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan2" className="col-sm-2 col-form-label">Penilaian kedua</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="wan2" placeholder="Masukkan Nilai disini"/>            
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

export default daftarFitProper
