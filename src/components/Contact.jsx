import React from 'react'

const Contact = () => {
  return (
    <div className='container contacts'>
        <h2 className='title'>Contacts</h2>
        <table>
            <thead>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            </thead>
            <tbody>
            <td>Bishkek Auezova-8</td>
            <td>emirsoltonbekov7@gmail.com</td>
            <td>+996559438886</td>
            <td>http://www.emirsoltonbek.com</td>
            </tbody>
        </table>
    </div>
  )
}

export default Contact