import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table } from 'react-bootstrap'
import './Report.css'
import useLocalStorage from 'use-local-storage'
const Reports = () => {
  const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
  return (
    <div  data-theme={theme} style={{overflow:'hidden', height:'100vh', width:'100%'}}>
      <Sidebar />
      <NavbarMenu />
      <Container className='reports'>
        <h5 className='mt-5  fw-bold text-center'>Reports</h5>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data'>
        <Table className='data-table'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User name</th>
              <th>Client Name</th>
              <th>JD number</th>
              <th>Candidate Name</th>
              <th>Billable CTC </th>
              <th>Designation </th>
              <th>DOJ</th>
              <th>Location</th>
              <th>Sign up rate </th>
              <th>Base invoice value</th>
              <th>Recruiter's payout % </th>
              <th>Recruiter's payout</th>
              <th>Recruiter's payout value </th>
              <th>TTC's share </th>
              <th>Expected payment receipt month</th>
              <th>Payment received</th>
            </tr>
 
          </thead>
          <tbody>
              <tr>
                <td>001</td>
                <td>pkrs</td>
                <td>Prashant Kumar</td>
                <td>777</td>
              </tr>
            </tbody>
        </Table>
        </Container>
        </div>
    </div>
  )
}

export default Reports