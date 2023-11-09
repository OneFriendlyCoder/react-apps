import React, { Component } from 'react'
export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
      <div className='card border-0 card-body my-3 bg-dark'>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <div className='input-group-prepend bg-primary text-white'>
                    <div className='fas fs-book'>

                    </div>
                </div>
                <input type='text' className='form-control text-capitalize' placeholder='Add a todo item' value={item} onChange={handleChange}></input>
            </div>
            <button type='submit' className={editItem ? 'btn btl-block btn-success mt-3':'btn btl-block btn-primary mt-3'}>{editItem ? 'Edit Item': 'Add Item'}</button>
        </form>
      </div>
    )
  }
}
