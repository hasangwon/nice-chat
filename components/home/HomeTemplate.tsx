import { useContext, useEffect, useState } from "react";
import router from "next/router";
import { GlobalContext } from "../../context/GlobalContext";
import db from "../../firebase";

const HomeTemplate = () => {
  const {
    state: { adminInfo },
    dispatch,
  } = useContext(GlobalContext);

  const [chatKeyInput, setChatKeyInput] = useState("");
  const onChangeChatKeyInput = (e: any) => {
    if (e.target.value.length > 20) {
      return;
    }
    setChatKeyInput(e.target.value);
  };
  const searchAdmin = async (adminKey: string) => {
    const adminSnapshot = await db.collection("Admin").doc(adminKey).get();
    if (adminSnapshot.exists) {
      return adminSnapshot.data();
    } else {
      return null;
    }
  };

  return (
    <div className="w-full h-screen bg-[#f2e9e1] flex flex-col text-dark py-2">
      <header className="flex justify-center title-font text-2xl">
        줄넘기 노래빠
      </header>
      <div className="h-full items-center flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-dark">채팅 입장</h1>
        <div className="flex justify-center  mt-4 w-full">
          <div className="">
            <input
              type="text"
              value={chatKeyInput}
              onChange={onChangeChatKeyInput}
              className="w-[15rem] p-2 outline-none focus:outline-none"
              placeholder="채팅 키 입력"
            />
          </div>
          <button
            className="p-2 bg-[#cbe86b]"
            onClick={() => {
              if (!chatKeyInput.replaceAll(" ", ""))
                return alert("채팅 키를 입력해주세요.");
              if (chatKeyInput.length !== 20) {
                return alert("채팅 키는 20자리입니다.");
              }
              searchAdmin(chatKeyInput).then((admin) => {
                if (admin) {
                  dispatch({
                    type: "SET_ADMIN_INFO",
                    payload: admin,
                  });
                  alert("채팅방으로 이동합니다.");
                  router.push(`/chat/?key=${chatKeyInput}`);
                } else {
                  alert("존재하지 않는 채팅방입니다.");
                }
              });
            }}
          >
            이동
          </button>
        </div>
      </div>
      <footer className="flex justify-center title-font text-2xl">B1</footer>
    </div>
  );
};

export default HomeTemplate;
