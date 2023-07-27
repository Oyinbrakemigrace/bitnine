import React from "react";
import agens from "../assets/images/agenSQL-Logo.png";
import enterprise from "../assets/images/enterprisePackage.png";
import keyFeatures from "../assets/images/keyFeatures.png";
import passwordProfile from "../assets/images/passwordProfile.png";
import data from "../assets/images/Data-Redaction.png";
import auditing from "../assets/images/auditing.png";

const Logo = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <section>
          <img src={agens} alt="agensLogo" className="d-block m-auto" />
          <div className="mt-4 text-center">
            <h5>An integration of Bitnine’s DB technology and PG expertise</h5>
            <p>
              AgensSQL is an all-new relational DBMS based on PostgreSQL, with
              years of expertise <br /> and knowledge accumulated through
              database research and development.
            </p>
            <p>
              The enterprise package, along with AgensSQL engine, is an
              all-in-one solution that ensures <br /> the efficiency and
              scalability of data management.
            </p>
            <p>
              Get AgensSQL now for stable operation and management services at a
              <br />
              reduced maintenance cost.
            </p>
          </div>
          <div className="d-flex justify-content-center my-5">
            <button className="mx-4">CONTACT</button>
            <button className="mx-4">CONTACT</button>
            <button className="mx-4">CONTACT</button>
          </div>
        </section>
        <section className="agens">
          <img src={enterprise} alt="" />
        </section>
        <section className="key-features text-center">
          <h2 className="mt-5">Key Features</h2>
          <p className="mt-3">
            Manage your data with Agens Enterprise Package <br /> Essential
            enterprise features such as high availability and sharding are
            provided
          </p>
          <img src={keyFeatures} alt="" className="my-5" />
        </section>
        <section className="dbEngine text-center">
          <div>
            <h2>AgensSQL DB Engine</h2>
            <p className="text-decoration-underline">Enhanced Data Security</p>
            <p>
              AgensSQL is a PostgreSQL-based DBMS <br />
              that guarantees optimal security and stability
            </p>
          </div>
          <div className="hover-img">
            <div>
              <img src={passwordProfile} alt="" className="hidden-pic" />
              <ul className="hidden-text">
                <li>user password policy reinforces login security</li>
                <li>excessive failed login attempts lock an account</li>
                <li>define rules for password complexit</li>
              </ul>
            </div>
            <div>
              <img src={data} alt="" className="hidden-pic" />
              <ul className="hidden-text">
                <li>enhanced data security of user personal information</li>
                <li>
                  resolve privacy issues in preparation for security audits
                </li>
                <li>
                  encryption or masking with unidentifiable special characters
                </li>
              </ul>
            </div>
            <div>
              <img src={auditing} alt="" className="hidden-pic" />
              <ul className="hidden-text">
                <li>monitors database activities and collects data</li>
                <li>
                  traces object accessed or DDL & DML statements executed by a
                  use
                </li>
                <li>records all actions in logs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Logo;
