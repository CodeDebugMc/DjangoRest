import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) => 
{
  //const [name, setName] = useState ('');

  //INPUT HERE!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [first_name, firstName] = useState('');
  const [middle_name, middleName] = useState('');
  const [last_name, lastName] = useState('');
  const [address, setAddress] = useState ('');
  const [email, setEmail] = useState ('');
  const [phone, setPhone] = useState ('');
  const [zipcode, setZipcode] = useState ('');
  const [birthday, setBirthday] = useState ('');
  const [telephone, setTelephone] = useState ('');
  //NEW TO CART
  const [civilStatus, setcivilStatus] = useState ('');
  const [heightM, setHeightM] = useState ('');
  const [weightKg, setWeightKg] = useState ('');
  const [bloodType, setBloodType] = useState ('');
  const [gsisIdNo, setGsisIdNo] = useState ('');

  const [pagIbigIdNo, setpagIbigIdNo] = useState ('');
  const [SSS_No, setSSS] = useState ('');
  const [TIN_No, setTIN] = useState ('');
  const [agencyEmployeeNo, setAgency] = useState ('');
  const [citizenship, setCitizen] = useState ('');

  const [fatherSurName, setFaSurname] = useState ('');
  const [fatherFirstName, setFaFirstname] = useState ('');
  const [fatherMiddleName, setFaMiddlename] = useState ('');
  const [motherSurname, setMoSurname] = useState ('');
  const [motherFirstName, setMoFirstName] = useState ('');
  const [motherMiddleName, setMoMiddleName] = useState ('');
  
  const [elementary, setElementary] = useState ('');
  const [secondary, setSecondary] = useState ('');
  const [vocational, setVocational] = useState ('');
  const [college, setCollege] = useState ('');
  //const [description, setDescription] = useState('');

  useEffect(() => {
    if (item)
      {
        //setName(item.name);

        //INPUT HERE!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        firstName(item.first_name);
        middleName(item.middle_name);
        lastName(item.last_name);
        setAddress(item.address);
        setEmail(item.email);
        setPhone(item.phone);
        setZipcode(item.zipcode);
        setBirthday(item.birthday);
        setTelephone(item.telephone);
        //NEW TO CART
        setcivilStatus(item.civilStatus);
        setHeightM(item.heightM);
        setWeightKg(item.weightKg);
        setBloodType(item.bloodType);
        setGsisIdNo(item.gsisIdNo);

        setpagIbigIdNo(item.pagIbigIdNo);
        setSSS(item.SSS_No);
        setTIN(item.TIN_No);
        setAgency(item.agencyEmployeeNo);
        setCitizen(item.citizenship);

        setFaSurname(item.fatherSurName);
        setFaFirstname(item.fatherFirstName);
        setFaMiddlename(item.fatherMiddleName);
        setMoSurname(item.motherSurname);
        setMoFirstName(item.motherFirstName);
        setMoMiddleName(item.motherMiddleName);

        setElementary(item.elementary);
        setSecondary(item.secondary);
        setVocational(item.vocational);
        setCollege(item.college);
        //setDescription(item.description);
      }
  }, [item]);
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {first_name, last_name, middle_name, address, email, phone, zipcode, birthday, telephone, 
      civilStatus, heightM, weightKg, bloodType, gsisIdNo, pagIbigIdNo, SSS_No, TIN_No, agencyEmployeeNo, citizenship,
    fatherFirstName, fatherSurName, fatherMiddleName, motherSurname, motherFirstName, motherMiddleName, elementary, secondary, vocational,college};
    try{
      if (item){
        await
        axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
      } else {
        axios.post('http://localhost:8000/api/items/', data);
      }
      onSuccess();
    } catch (error) {
      console.error('There was an error submittimg the form!', error);
    }
  };
  return(
    //INPUT HERE!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <form onSubmit={handleSubmit}>
      <div>
        <label>Firstname:</label>
        <input type='text' value={first_name} onChange={(e) => firstName(e.target.value)}/>
      </div>


      <div>
        <label>Middlename:</label>
        <input type='text' value={middle_name} onChange={(e) => middleName(e.target.value)}/>
      </div>

      <div>
        <label>Lastname:</label>
        <input type='text' value={last_name} onChange={(e) => lastName(e.target.value)}/>
      </div>

      <div>
        <label>birthday:</label>
        <input type='text' value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
      </div>
    


      <div>
        <label>phone#:</label>
        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <div>
        <label>telephone:</label>
        <input type='text' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
      </div>


      <div>
        <label>email@:</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      

      <div>
        <label>Address:</label>
        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
      </div>

      <div>
        <label>zipcode:</label>
        <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
      </div>

      <div>
        <label>Civil Status:</label>
        <input type='text' value={civilStatus} onChange={(e) => setcivilStatus(e.target.value)}/>
      </div>

      <div>
        <label>Height:</label>
        <input type='text' value={heightM} onChange={(e) => setHeightM(e.target.value)}/>
      </div>

      <div>
        <label>Weight:</label>
        <input type='text' value={weightKg} onChange={(e) => setWeightKg(e.target.value)}/>
      </div>

      <div>
        <label>Blood Type:</label>
        <input type='text' value={bloodType} onChange={(e) => setBloodType(e.target.value)}/>
      </div>

      <div>
        <label>GSIS ID NO.:</label>
        <input type='text' value={gsisIdNo} onChange={(e) => setGsisIdNo(e.target.value)}/>
      </div>

      <div>
        <label>PAG-IBIG ID NO.:</label>
        <input type='text' value={pagIbigIdNo} onChange={(e) => setpagIbigIdNo(e.target.value)}/>
      </div>

      <div>
        <label>SSS NO.:</label>
        <input type='text' value={SSS_No} onChange={(e) => setSSS(e.target.value)}/>
      </div>

      <div>
        <label>TIN NO.:</label>
        <input type='text' value={TIN_No} onChange={(e) => setTIN(e.target.value)}/>
      </div>

      <div>
        <label>AGENCY EMPLOYEE NO.:</label>
        <input type='text' value={agencyEmployeeNo} onChange={(e) => setAgency(e.target.value)}/>
      </div>

      <div>
        <label>CITIZENSHIP:</label>
        <input type='text' value={citizenship} onChange={(e) => setCitizen(e.target.value)}/>
      </div>

      <div>
        <label>Father Surname:</label>
        <input type='text' value={fatherSurName} onChange={(e) => setFaSurname(e.target.value)}/>
      </div>

      <div>
        <label>Father Firstname:</label>
        <input type='text' value={fatherFirstName} onChange={(e) => setFaFirstname(e.target.value)}/>
      </div>

      <div>
        <label>Father Middlename:</label>
        <input type='text' value={fatherMiddleName} onChange={(e) => setFaMiddlename(e.target.value)}/>
      </div>

      <div>
        <label>Mother Surname:</label>
        <input type='text' value={motherSurname} onChange={(e) => setMoSurname(e.target.value)}/>
      </div>

      <div>
        <label>Mother Firstname:</label>
        <input type='text' value={motherFirstName} onChange={(e) => setMoFirstName(e.target.value)}/>
      </div>

      <div>
        <label>Mother Middlename:</label>
        <input type='text' value={motherMiddleName} onChange={(e) => setMoMiddleName(e.target.value)}/>
      </div>

      <div>
        <label>Elementary:</label>
        <input type='text' value={elementary} onChange={(e) => setElementary(e.target.value)}/>
      </div>

      <div>
        <label>Secondary:</label>
        <input type='text' value={secondary} onChange={(e) => setSecondary(e.target.value)}/>
      </div>

      <div>
        <label>Vocational:</label>
        <input type='text' value={vocational} onChange={(e) => setVocational(e.target.value)}/>
      </div>

      <div>
        <label>College:</label>
        <input type='text' value={college} onChange={(e) => setCollege(e.target.value)}/>
      </div>








      <button type='submit'>Submit</button>
    </form>
  );

};

export default ItemForm;
