import React, { useState } from "react";
import useBoardStore from "../../../../stores/board";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { IPoster } from "../../../../models/poster";
import { Button } from "antd";
import Poster from "./Poster";
import ItemCard from "./ItemCard";
import PosterForm from "../../../forms/PosterForm";

const KhabBan2 = () => {
  const posters = useBoardStore((state) => state.board?.posters);
  const [openPosterForm, setOpenPosterForm] = useState(false);

  return (
    <>
      <Button
        type="primary"
        className="text-blue-500 mb-4"
        onClick={() => setOpenPosterForm(true)}
      >
        Add Poster
      </Button>
      <div className="flex justify-start gap-4">
        <DndProvider backend={HTML5Backend}>
          {posters?.map((poster: IPoster, pIndex: number) => {
            return (
              <Poster poster={poster} index={pIndex} key={poster._id}>
                {poster?.errands?.map((errand, EIndex) => (
                  <ItemCard
                    key={errand?._id}
                    errand={{ ...errand, index: EIndex }}
                    poster={poster}
                    posterIndex={pIndex}
                    index={EIndex}
                  />
                ))}
              </Poster>
            );
          })}
          <Button
            type="primary"
            className="text-blue-500 mb-4"
            onClick={() => setOpenPosterForm(true)}
          >
            Add Poster
          </Button>
        </DndProvider>
      </div>
      <PosterForm open={openPosterForm} setOpen={setOpenPosterForm} />
    </>
  );
};

export default KhabBan2;
