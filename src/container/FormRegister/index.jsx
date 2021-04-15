import React, { useState } from "react";
import "./style.css";
import InputCpn from "../../components/Input/index";
import ButtonCpn from "../../components/Button/index";
import SelectCpn from "../../components/Select/index";

const day = [
  { value: "0", text: "Ngày" },
  { value: "1", text: "1" },
  { value: "2", text: "2" },
  { value: "3", text: "3" },
  { value: "4", text: "4" },
  { value: "5", text: "5" },
  { value: "6", text: "6" },
  { value: "7", text: "7" },
  { value: "8", text: "8" },
  { value: "9", text: "9" },
  { value: "10", text: "10" },
  { value: "11", text: "11" },
  { value: "12", text: "12" },
  { value: "13", text: "13" },
  { value: "14", text: "14" },
  { value: "15", text: "15" },
  { value: "16", text: "16" },
  { value: "17", text: "17" },
  { value: "18", text: "18" },
  { value: "19", text: "19" },
  { value: "20", text: "20" },
  { value: "21", text: "21" },
  { value: "22", text: "22" },
  { value: "23", text: "23" },
  { value: "24", text: "24" },
  { value: "25", text: "25" },
  { value: "26", text: "26" },
  { value: "27", text: "27" },
  { value: "28", text: "28" },
  { value: "29", text: "29" },
  { value: "30", text: "30" },
  { value: "31", text: "31" },
];

const month = [
  { value: "0", text: "Tháng" },
  { value: "1", text: "Tháng 1" },
  { value: "2", text: "Tháng 2" },
  { value: "3", text: "Tháng 3" },
  { value: "4", text: " Tháng 4" },
  { value: "5", text: "Tháng 5" },
  { value: "6", text: "Tháng 6" },
  { value: "7", text: "Tháng 7" },
  { value: "8", text: "Tháng 8" },
  { value: "9", text: " Tháng 9" },
  { value: "10", text: "Tháng 10" },
  { value: "11", text: "Tháng 11" },
  { value: "12", text: "Tháng 12" },
];

const year = [
  { value: "0", text: "Năm" },
  { value: "1", text: "2021" },
  { value: "2", text: "2020" },
  { value: "3", text: "2019" },
  { value: "4", text: "2018" },
  { value: "5", text: "2017" },
  { value: "6", text: "2016" },
  { value: "7", text: "2015" },
  { value: "8", text: "2014" },
  { value: "9", text: "2013" },
  { value: "10", text: "2012" },
  { value: "11", text: "2011" },
  { value: "12", text: "2010" },
  { value: "13", text: "2009" },
  { value: "14", text: "2008" },
  { value: "15", text: "2007" },
  { value: "16", text: "2006" },
  { value: "17", text: "2005" },
  { value: "18", text: "2004" },
  { value: "19", text: "2003" },
  { value: "20", text: "2002" },
  { value: "21", text: "2001" },
  { value: "22", text: "2000" },
  { value: "23", text: "1999" },
  { value: "24", text: "1998" },
  { value: "25", text: "1997" },
  { value: "26", text: "1996" },
  { value: "27", text: "1995" },
  { value: "28", text: "1994" },
  { value: "29", text: "1993" },
  { value: "30", text: "1992" },
  { value: "31", text: "1991" },
  { value: "32", text: "1990" },
  { value: "33", text: "1989" },
  { value: "34", text: "1988" },
  { value: "35", text: "1987" },
];

const FormRegister = () => {
  const handleOnChangeFemale = () => {};

  const handleDay = (data) => {
    day.map((data) => {
      <option>{data.day}</option>;
    });
  };

  return (
    <div className="register-container">
      <div className="register-title">
        <div className="register-title-times">
          <div className="register">Đăng ký</div>
        </div>
        <p className="p-register">Nhanh chóng và dễ dàng.</p>
      </div>
      <hr className="hr-line-register" />
      <form className="form-container">
        <div className="fist-last-name">
          <InputCpn className="last-name" placeholder="Họ" />
          <InputCpn className="first-name" placeholder="Tên" />
        </div>
        <InputCpn className="phone-email" placeholder="Số di động hoặc email" />
        <InputCpn className="new-password" placeholder="Mật khẩu mới" />
        <div className="birthday-container">
          <div className="birthday-title">Ngày sinh</div>
          <div className="birthday">
            <span>
              <SelectCpn
                name="birthday-day"
                title="Ngày"
                id="day"
                option={day}
              />
              <SelectCpn
                className="birthday-select birthday-month"
                name="birthday-month"
                title="Tháng"
                id="month"
                option={month}
              />
              <SelectCpn
                name="birthday-year"
                title="Năm"
                id="year"
                option={year}
              />
            </span>
          </div>
        </div>
        <div className="gender-container">
          <div className="gender-title">Giới tính</div>
          <div className="gender">
            <span className="gender-span">
              <label className="input-female">
                <label>Nữ</label>
                <InputCpn
                  className="input-gender"
                  name="gender"
                  type="radio"
                  handleOnChange={handleOnChangeFemale}
                />
              </label>
              <label className="input-male">
                <label>Nam</label>
                <InputCpn
                  className="input-gender"
                  name="gender"
                  type="radio"
                  handleOnChange={handleOnChangeFemale}
                />
              </label>
              <label className="input-customer">
                <label>Tuỳ Chỉnh</label>
                <InputCpn
                  className="input-gender"
                  name="gender"
                  type="radio"
                  handleOnChange={handleOnChangeFemale}
                />
              </label>
            </span>
          </div>
        </div>
        <div className="rules">
          <p className="rules-p">
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với
            <a className="rules-a">Điều khoản</a>,
            <a className="rules-a">Chính sách dữ liệu</a> và
            <a className="rules-a">Chính sách cookie</a> của chúng tôi. Bạn có
            thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc
            nào.
          </p>
        </div>
        <div className="register-div">
          <ButtonCpn className="register-btn" title="Đăng ký" />
        </div>
      </form>
    </div>
  );
};
export default FormRegister;
