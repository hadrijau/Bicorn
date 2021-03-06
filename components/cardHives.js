import React, {useState} from 'react';
import Link from "next/link";
import {faChevronUp, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalculator, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import Dialog from '@material-ui/core/Dialog';
import Countdown from 'react-countdown';
import ReactStopwatch from 'react-stopwatch';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);




  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className="dialogContainer">
        <h1 className="white ">ROI</h1>
        <hr/>
        <div className="titleRoi flex justify-content-around">
          <p>TIMEFRAME</p>
          <p>ROI</p>
          <p>BICORN PER $1000</p>
        </div>
        <div className="flex innerTitle justify-content-around">
          <p>1d</p>
          <p>0.82%</p>
          <p>71.72</p>
        </div>
        <div className="flex innerTitle justify-content-around">
          <p>1d</p>
          <p>0.82%</p>
          <p>71.72</p>
        </div>
        <div className="flex innerTitle justify-content-around">
          <p>1d</p>
          <p>0.82%</p>
          <p>71.72</p>
        </div>

        <p className="mt-5 paragraph">Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.</p>

      </div>
    </Dialog>
  );
}

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={2}
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p style={{color: 'white'}}>{formatted}</p>
        </div>
      );
    }}
  />
);

const CardHives = () => {


  const [open, setOpen] = React.useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(openDetails)
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="cardBicorn hiveCard">
      <div className="titleContainer flex">
        <img src={'/LogoRetourne.png'} alt="" className="imgCardHive"/>
        <div className='flex-column flex'>
          <h5 className="hiveTitle">Bicorn-Busd LP</h5>
          <div className="flex ml-3 fees my-3">
            <div className="nofees">
              <p>No fees</p>
            </div>
            <div className="x">
              <p>40x</p>
            </div>
          </div>
        </div>
      </div>
      <div className="innerHives flex justify-content-between mt-3">
        <div className="mb-1">
          <p className="specialColor">APR</p>
        </div>
        <div className="flex">
          <p className="white">546,7565%</p>
          {/*<FontAwesomeIcon icon={faCalculator} style={{color: 'white'}} onClick={handleClickOpen}/> */}
        </div>
      </div>
      <div className="innerHives flex justify-content-between">
        <div className="mb-1">
          <p className="specialColor">Earn :</p>
        </div>
        <div>
          <p className="white">BICORN</p>
        </div>
      </div>
      <div className="innerHives flex justify-content-between">
        <div className="mb-1">
          <p className="specialColor">Deposit Fee:</p>
        </div>
        <div>
          <p className="white">0%</p>
        </div>
      </div>
      <div className="innerHives flex justify-content-between">
        <div className="mb-1">
          <p className="specialColor">Harvest Duration: </p>
        </div>
        <div>
            <Stopwatch />
        </div>
      </div>

      <div className="innerHives flex justify-content-between">
        <div className="mb-1">
          <p className="specialColor">LP Type : </p>
        </div>
        <div>
          <p className="white">BICORN-LP</p>
        </div>
      </div>

      <div className="pantherEarned mt-2">
        <p className="pantherEarnedText">BICORN EARNED</p>
      </div>

      <div className="harvest2">
        <p>Harvest</p>
      </div>

      <p className="LPStaked mt-2">BICORN-BUSD LP STAKED</p>

      <div className="buttonContainer buttonHivesContainer">
        <Link href="#" >
          <p className="unlocked">Unlock Wallet</p>
        </Link>
      </div>

      <hr className="hrHives"/>

      <div className="detailsContainer" onClick={() => {
        setOpenDetails(!openDetails)
      }}>
        {openDetails ?
          <div className='openContainer' onClick={() => setOpenDetails(!openDetails)}>
            <div className='flex chevron'>
              <p>Hide</p>
              <FontAwesomeIcon icon={faChevronUp} style={{color: 'white', width: '20%', marginTop: '3%'}} size={10}/>
            </div>

            <h5 style={{textAlign: 'center'}}>Total Liquidity: $34554554</h5>

          </div>

          : <div className='flex chevron'>
            <p>Details</p>
            <FontAwesomeIcon icon={faChevronDown} style={{color: 'white', width: '20%', marginTop: '3%'}} size={10}/>
          </div>}

      </div>
    </div>
  );
};

export default CardHives;
