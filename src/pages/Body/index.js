import Cards from "../Cards";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Grid, GridItem, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import SearchContext from "../../context/SearchContext";

const Body = () => {
  const { search } = useContext(SearchContext);
  const fetchProjects = async ({ pageParam }) => {
    const res = await fetch(
      `https://freetestapi.com/api/v1/books?limit=${pageParam}&search=${search}`,
    );
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["books", search],
    queryFn: fetchProjects,
    initialPageParam: 15,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });

  console.log("data:", data);
  if (status === "pending") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.pages.map((group) =>
          group.map((project, i) => (
            <GridItem maxWidth={"20vw"} w="20vw" h="250px" key={i}>
              <Cards
                image={project.cover_image}
                title={project.title}
                author={project.author}
                data={project}
              />
            </GridItem>
          )),
        )}
      </Grid>
      <div>
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          colorScheme={"teal"}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
        </Button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default Body;
