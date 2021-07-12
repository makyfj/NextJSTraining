import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "franklin", name: "Franklin" },
    { id: "alberto", name: "Alberto" },
  ];
  return (
    <div>
      <h1>Client Page Index</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: `/clients/[id]`, query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
