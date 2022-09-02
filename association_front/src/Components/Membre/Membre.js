import React from 'react'
import './membre.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Membre = () => {
    const [donnees, setdonnees] = useState([]);
   const url = 'http://127.0.0.1:8000/api/membre/'

   useEffect(()=>{
    axios.get(url)
    .then(res =>{
        setdonnees(res.data)
        console.log(res.data)
    }).catch((err)=> console.log(err))
   },[])
   const [nom, setnom] = useState('')
   const [prenom, setprenom] = useState('')
   const [age, setage] = useState('')
   const [residence_actuelle, setresidence_actuelle] = useState('')


   const ajoutermembre=(e)=>{
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/membre/',{
        nom,
        prenom,
        age,
        residence_actuelle,
    })
  
}


   
  return (
    <section id='membre' className='container_membre'>
       <center><h1>Membre</h1></center>
       <form>
        <label>Nom</label>
        <input type="text" placeholder='Entrer votre nom' onChange={(e)=>setnom(e.target.value)}/>
        <label>Prenom</label>
        <input type="text" placeholder='Entrer votre Prenom' onChange={(e)=>setprenom(e.target.value)}/>
        <label>Age</label>
        <input type="text" placeholder='Entrer votre Age' onChange={(e)=>setage(e.target.value)}/>
        <label>Residence Actuelle</label>
        <input type="text" placeholder='Entrer votre Residence' onChange={(e)=>setresidence_actuelle(e.target.value)}/>
        <button className='btn btn-primary' type='submit' onClick={(e)=>ajoutermembre()}>Add</button>
       
       </form>
        <table className='customers'>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Age</th>
                <th>Residence Actuelle</th>
                
            </tr>

        {
            donnees.map(memb =>(
                <tr>
                    <td >{memb.nom}</td>
                    <td >{memb.prenom}</td>
                    <td >{memb.age}</td>
                    <td >{memb.residence_actuelle}</td>
                    <td ><button className='btn btn-warning' type='submit'>Edit</button></td>
                    <td ><button className='btn btn-danger' type='submit'>Delete</button></td>
                    
               
            </tr>
            ))
        }
        </table>
    </section>
  )
}

export default Membre