import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import SideBar from "../components/SideBar";
import Link from 'next/link';
import CardBicorn from "../components/cardBicorn";

export default function Lottery () {


  const [classNameNap, setClassNameNap] = useState('linkContainer')
  const [classNameHome, setClassNameHome] = useState('linkContainer')
  const [classNameLottery, setClassNameLottery] = useState('linkContainer')
  const [classNameHives, setClassNameHives] = useState('linkContainer')
  const [classNameStakes, setClassNameStakes] = useState('linkContainer');


  useEffect(() => {
    setClassNameLottery('linkContainerPink')
  })

  return (
    <React.Fragment>
      <Head>
        <title>Bircorn</title>
      </Head>
      <div className="indexContainer">
        <SideBar classNameNap={classNameNap} classNameHome={classNameHome} classNameHives={classNameHives} classNameLottery={classNameLottery} classNameStackes={classNameStakes}/>
        <div className="main">
          <div className="imgContainer">
          </div>

          <div className="comingSoonContainer">
            <h1 className="white comingSoonText">Comming Soon</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}