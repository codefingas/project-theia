import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { getDroppedOrSelectedFiles } from "html5-file-selector";

const FileUploadComponent = ({ isUploaded }: { [key: string]: any }) => {
  const fileParams = ({ meta }: { [key: string]: any }) => {
    console.log("meta -", meta);
    return { url: "https://httpbin.org/post" };
  };

  const onFileChange = (
    { meta, file }: { [key: string]: any },
    status: any
  ) => {
    console.log(`Here it is ${status}`, meta, file);
    if (status === "done") {
      isUploaded(false);
    }
  };

  const onSubmit = (files: any, allFiles: any) => {
    console.log("submits here");
    allFiles.forEach((f: any) => f.remove());
  };

  const getFilesFromEvent = (e: any): any => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles: any) => {
        resolve(chosenFiles.map((f: any) => f.fileObject));
      });
    });
  };

  const selectFileInput = ({
    accept,
    onFiles,
    files,
    getFilesFromEvent,
  }: {
    [key: string]: any;
  }) => {
    const textMsg = files.length > 0 ? " Upload Again" : " Select Files";

    return (
      <label className="btn btn-danger mt-4">
        Drag and drop or
        {textMsg}
        <input
          style={{ display: "none" }}
          type="file"
          accept={accept}
          multiple
          onChange={(e) => {
            getFilesFromEvent(e).then((chosenFiles: any) => {
              onFiles(chosenFiles);
            });
          }}
        />
      </label>
    );
  };

  return (
    <Dropzone
      onSubmit={onSubmit}
      onChangeStatus={onFileChange}
      InputComponent={selectFileInput}
      getUploadParams={fileParams}
      getFilesFromEvent={getFilesFromEvent}
      accept="image/*,audio/*,video/*"
      maxFiles={1}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 600, height: 400 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
};

export default FileUploadComponent;
