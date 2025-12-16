import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  //  INDEX HAME 1 SE START KRNA HAI
  //  YE HUMNE PREV AUR NEXT BUTTON KE LIYE BANAYA HAI USESTATE
  const [index, setIndex] = useState(1);

  //  URL SE DATA FETCHING KA FUNCTION HAI YE
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    // SET KR DIYA DATA
    setUserData(response.data);
  };

  //  HERE WE APPLY USEEFFECT BECAUSE WE RUN EXACTYLY ONCE ONLY AND GIVE DEPENDENCY AS A INDEX
  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );

  //  AGAR USERDATA 0 SE BADA HUA TO YE CHAL JAYEGA AUR LOADING WILL NOT VISIBLE
  if (userData.length > 0) {
    //  DATA KO MAP KR DEGE
    //  THIS IS THE MAIN FUNCTION
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          {/*  YAHA HUMNE PROPS DRILLING KIYA HAI */}
          {/* AND HERE WE ARE PASSING THE PROPS AS ELEM */}
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/*  YE BASICALLY LOADING KE LIYE HAI YA LOADING SHOW KRNE KE LIYE */}
      {/*  USER KA DATA JO API CALL SE FETCH HUA HAI USKO SHOW KE LIYE HAI */}
      <div className="flex h-[82%] flex-wrap gap-4 p-2">{printUserData}</div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          //  HERE WE USE TURNARY OPERATOR
          //  JSIME AGAR INDEX KI VALUE 1 HAI TO OPACITY=0.6 NHI TO 1
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            // PREVIOUS WALI BUTTON KE LIYE HAI YE
            if (index > 1) {
              //  WE DO SUBTRACT BY 1
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        {/*  HERE WE SHOW OUR INDEX */}
        <h4>Page {index}</h4>

        {/*  NEXT BUTTON  */}
        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setUserData([]);
            //   WE DO ADD BY 1
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
