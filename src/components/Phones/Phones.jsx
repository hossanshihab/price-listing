import axios from "axios";
import { useEffect, useState } from "react"
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

const Phones = () => {

    const [phones, setPhone] = useState([]);

    useEffect(()=>{

        // fetch data by fetch 
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhone(data.data))

        // using axios fetch data
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => console.log(data.data.data))
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone=> {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhone(phonesWithFakeData)
        })
    },[])

  return (
    <div className="w-11/12 mx-auto">
        <h2 className="text-center font-bold text-5xl">Phones: {phones.length}</h2>
        <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={name}></XAxis>
        </BarChart>
    </div>
  )
}

export default Phones