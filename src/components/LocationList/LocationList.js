import React, {useState, useEffect} from 'react';
import './LocationList.scss';
import Select from '../../common/CustomSelect/CustomSelect';
import db from '../../db';

const LocationList = (props) => {
    let{deleteLocation, openLocationEditPopup, formFields} = props
    const[allLocations, setAllLocations] = useState([])

    useEffect(() => {
        const getLocations = async() => {
            let totalAddedLocations = await db.locations.toArray()
            setAllLocations(totalAddedLocations)
        }
        getLocations()
    },[])

    const deleteLocationHandler = async(id) => {
         db.locations.delete(id)
         let totalAddedLocations = await db.locations.toArray();
         setAllLocations(totalAddedLocations)
         deleteLocation(totalAddedLocations)
    }

    const editLocationHandler = async(id) => {
         let allLocations = await db.locations.toArray();
         const locationToEdit = await allLocations.filter((location) => location.id === id)
         await formFields(locationToEdit[0])
         openLocationEditPopup()    
    }
     
    return(
       <div className = 'locationList-pageContainer'>
         <div className = 'locationList-headingRow'>
             <span>Location Name</span>
             <span>Address</span>
             <span>Phone No.</span>
         </div>
         {allLocations && allLocations.map((location, index) => {
               return <div className = 'locationList-dataRow' key = {location.id}>
               <span>
               <span>{index + 1}</span>
               <span className = 'locationNameValue'>{location.locationName}</span>
               </span>
               <span className = 'addressValue'>{location.address_1}</span>
               <span className = 'phoneNoAndIcons'>
                   <span>{location.phoneNumber}</span>
                   <span><i onClick = {() => editLocationHandler(location.id)} className="icon-pencil pencilIcon"></i></span>
                   <span><i onClick = {() => deleteLocationHandler(location.id)} className="icon-trash trashIcon"></i></span>
              </span>
           </div>
         })}
         <div className = 'locationList-pagination'>
            <span className = 'itemsText'>Items per page:</span>
            <Select width = '50px' className = 'pagination-select'>
                <option>10</option>
                <option>20</option>
                <option>30</option>
            </Select>
            <span className = 'numeralsText '><span>{allLocations.length}</span> - <span>10</span> of <span>1</span></span>
            <span className = 'paginationIcons'><span>|&lt;</span><span> &lt;</span><span> &gt;</span><span>&gt;|</span></span>
         </div>
       </div>
    );
}

export default LocationList;