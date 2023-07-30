"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Interface for GitHub user data
interface GitHubUserData {
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: string;
  following: string;
  followers: string;
  // Add more properties as needed
}

export default function CardWithForm() {
  const [name, setName] = React.useState("");
  const [framework, setFramework] = React.useState("");
  const [githubData, setGithubData] = React.useState<GitHubUserData | null>(
    null
  ); // Provide initial type for githubData

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Fetch data from GitHub API based on the input name
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  };

  const handleCloseClick = () => {
    // Reset githubData to null when the close button is clicked
    setGithubData(null);
  };

  const handleClearClick = () => {
    // Clear the input field by resetting the name state to an empty string
    setName("");
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="absolute z-10 w-[350px]">
        <CardHeader>
          <CardTitle>Git Card</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full pb-5 items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  placeholder="Enter your GitHub username"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Enter</Button>
              <div className="hover:cursor-pointer" onClick={handleClearClick}>
                Cancel
              </div>
            </div>
          </form>
        </CardContent>

        {/* Display GitHub data when available */}
      </Card>
      <Card
        className={`absolute rounded-3xl w-[350px] ${
          githubData ? "z-30" : "z-0"
        }`}
      >
        {githubData && (
          <CardContent>
            <div className="pt-5">
              <p>{githubData.name}</p>
              <p>@{githubData.login}</p>
              <Image
                src={githubData.avatar_url}
                alt={githubData.login}
                className="py-5"
                width={500}
                height={500}
              />
              <p className="mb-2">{githubData.bio}</p>
              <div className="flex justify-between">
                <div className="flex py-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                  >
                    <path
                      fill="currentColor"
                      d="M4 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM2.25 7C1.56 7 1 7.56 1 8.25c0 0 0 2.25 3 2.25c2.378 0 2.871-1.414 2.973-2C7 8.347 7 8.25 7 8.25C7 7.56 6.44 7 5.75 7h-3.5Zm5.746 1.6a2.645 2.645 0 0 1-.09.536c-.063.223-.167.49-.342.765a4.1 4.1 0 0 0 .935.099c2.5 0 2.5-1.75 2.5-1.75c0-.69-.56-1.25-1.25-1.25H7.62c.24.358.379.787.379 1.25v.25l-.003.1Z"
                    />
                  </svg>
                  <p className="px-3">{githubData.followers} followers</p>
                  <p>{githubData.following} following</p>
                </div>
                <div className="flex items-center">
                  <div className="pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                      />
                    </svg>
                  </div>
                  <p>{githubData.public_repos}</p>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <Link
                  className="hover:underline underline-offset-4"
                  href={githubData.html_url}
                  target="_blank"
                >
                  view profile
                </Link>
              </div>
            </div>
          </CardContent>
        )}
        {githubData && (
          // Close button shown only when githubData is available
          <Button
            className="absolute top-6 right-6"
            variant="outline"
            onClick={handleCloseClick}
          >
            Close
          </Button>
        )}
      </Card>
    </div>
  );
}
