import React from "react";
import Sidebar from "../Sidebar";
import Banner from "../../components/Banner";
import image1 from '../../assets/1.png'
import { useSelector } from "react-redux";

const Landing = () => {
  const {user} =useSelector((state)=> state.auth)
  const title = `Hai, ${user.name}`
  const desc = "lorem ipsum dolor amet jsdfn ajsnf dajfn kjABFSSF DKBFDSBFdv  kjwbfsabf";
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Banner title={title} desc={desc} image={image1} />
      </div>
    </div>
  );
};

export default Landing;
