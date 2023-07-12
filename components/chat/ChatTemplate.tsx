import router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "next/image";

const ChatTemplate = () => {
  const {
    state: { adminInfo },
    dispatch,
  } = useContext(GlobalContext);
  const { query } = useRouter();
  console.log(query.key, "asdas");
  const [chatKey, setChatKey] = useState("");

  useEffect(() => {
    if (query && query.key) {
      setChatKey(query.key as string);
    }
  }, [query.key]);
  const onMoveHome = () => {
    dispatch({
      type: "SET_ADMIN_INFO",
      payload: null,
    });
    router.push("/");
  };
  return (
    <div className="relative w-full h-screen bg-yeondu p-8">
      <button className="absolute top-0 left-0" onClick={onMoveHome}>
        뒤로가기
      </button>
      <div className=" bg-white w-full h-full flex flex-col justify-between">
        <div className="">{adminInfo.title}</div>
        <div className="flex-1">
          contents ex
          <Image
            src="/image.png"
            width={100}
            height={100}
            alt="ex"
            className="w-[80%] h-full "
          />
        </div>
        <div className="w-full flex px-2">
          <input
            type="text"
            className="w-full p-2 outline-none focus:outline-none border border-dark mr-2"
            placeholder="채팅 키 입력"
          />
          <button className="w-[5rem] px-2 border border-dark">보내기</button>
        </div>
      </div>
    </div>
  );
};

export default ChatTemplate;
