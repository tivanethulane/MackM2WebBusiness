import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data for transactions and invoices
  const transactions = [
    { id: 1, client: 'John Doe', amount: 2500, status: 'Pending', date: '2025-04-08', method: 'Bank Transfer' },
    { id: 2, client: 'Jane Smith', amount: 1500, status: 'Confirmed', date: '2025-04-05', method: 'Credit Card' },
    { id: 3, client: 'Tom Brown', amount: 3500, status: 'Pending', date: '2025-04-07', method: 'Cash' },
  ];

  // Handling transaction confirmation
  const confirmTransaction = (id) => {
    console.log(`Transaction ${id} confirmed`);
  };

  const cancelTransaction = (id) => {
    console.log(`Transaction ${id} canceled`);
  };

  return (
    <Container>
      {/* Dashboard Header */}
      <header className="text-center my-5">
        <h1>Transaction Dashboard</h1>
        <p>Manage and confirm transactions, track invoices, and ensure smooth cash flow.</p>
      </header>

      {/* Transaction Table Section */}
      <section className="my-5">
        <h2 className="text-center">Pending Transactions</h2>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h5>Pending Transactions</h5>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Payment Method</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter((transaction) => transaction.status === 'Pending')
                      .map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.client}</td>
                          <td>${transaction.amount}</td>
                          <td>{transaction.status}</td>
                          <td>{transaction.date}</td>
                          <td>{transaction.method}</td>
                          <td>
                            <Button
                              variant="success"
                              className="me-2"
                              onClick={() => confirmTransaction(transaction.id)}
                            >
                              <FaCheckCircle /> Confirm
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => cancelTransaction(transaction.id)}
                            >
                              <FaTimesCircle /> Cancel
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Invoice Section */}
      <section className="my-5">
        <h2 className="text-center">Invoices</h2>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h5>Recent Invoices</h5>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Invoice #</th>
                      <th>Client</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .map((transaction) => (
                        <tr key={transaction.id}>
                          <td>INV-{transaction.id}</td>
                          <td>{transaction.client}</td>
                          <td>${transaction.amount}</td>
                          <td>{transaction.status}</td>
                          <td>{transaction.date}</td>
                          <td>
                            <Button variant="primary" className="me-2">
                              <FaMoneyBillWave /> View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Cash Flow Section */}
      <section className="my-5 bg-light p-4">
        <h2 className="text-center">Manage Cash Flow</h2>
        <Row>
          <Col md={4} className="text-center">
            <Card>
              <Card.Body>
                <h5>Cash Transactions</h5>
                <p>Review and confirm cash transactions directly.</p>
                <Button variant="primary">View Cash Flow</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card>
              <Card.Body>
                <h5>Bank Transactions</h5>
                <p>Monitor and confirm bank transfer payments.</p>
                <Button variant="primary">View Bank Transactions</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card>
              <Card.Body>
                <h5>Credit Card Transactions</h5>
                <p>Track and confirm credit card payments.</p>
                <Button variant="primary">View Credit Card Payments</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

    </Container>
  );
};

export default Dashboard;
