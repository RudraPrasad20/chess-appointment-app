"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function allPosts() {
  try {
    const response = await axios.get("http://localhost:3000/api/submit");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default function Dashboard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await allPosts();
      setUserData(data);
    };

    fetchData();
  }, []);
  return (
    <Table>
      <TableCaption>A list of your posts</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>FirstName</TableHead>
          <TableHead>Lastname</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Text</TableHead>
          <TableHead>Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.firstname}</TableCell>
            <TableCell>{post.lastname}</TableCell>
            <TableCell>{post.email}</TableCell>
            <TableCell>{post.text}</TableCell>
            <TableCell>{post.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
