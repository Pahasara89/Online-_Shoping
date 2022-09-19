import React from 'react'
import CardItem from './CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Hello Admin</h1>
      <h1>Welcome to Blue Market Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/growth-analytics.png"
              text="Manage Products Details"
              label="Product Management"
              path="/view"
            />
            <CardItem
              src="images/delivery.gif"
              text="Manage Delivere Details"
              label="Delivery Management"
              path="/add-delivery"
            />

            <CardItem
              src="images/user.gif"
              text="Details of Users"
              label="User Management"
              path="/userManagement"
            />
          </ul>

          <ul className='cards__items'>


            <CardItem
              src="images/employee.gif"
              text="Maintain Employee Details"
              label="Employee Management"
              path="/add-employee"
            />

            <CardItem
              src="images/order.gif"
              text="Details of Orders"
              label="Order Management"
              path="/orderManagement"
            />


          </ul>

        </div>
      </div>
    </div>
  )
}

export default AdminCards