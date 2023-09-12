import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const loginUser = JSON.parse(localStorage.getItem("userLogin"))[0];
  const allUserData = JSON.parse(localStorage.getItem("userRegistration"));

  const userLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/");
  };

  const findUser = (i) => {
    return allUserData[i];
  }

  const userRemove = (e) => {
    const index = e.target.id;
    if(findUser(index).username===loginUser.username)
        alert("You cannot remove yourself!");
    else{
        allUserData.splice(index,1);
        localStorage.setItem("userRegistration",JSON.stringify(allUserData));
        window.location.reload();
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Welcome, {`${loginUser.name}`}</h1>
            <Button className={`mb-5`} onClick={userLogout}>
              Logout
            </Button>
          </Col>
          <Col>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUserData.map((user, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button id={i} variant="danger" onClick={userRemove}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
