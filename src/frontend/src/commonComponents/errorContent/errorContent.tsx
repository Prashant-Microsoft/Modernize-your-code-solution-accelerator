import { Accordion, AccordionItem, AccordionHeader, AccordionPanel,Text } from "@fluentui/react-components";
import React from "react";
import { TbSql } from "react-icons/tb";
import './errorContent.scss';
import ErrorComponent from "../errorsComponent/errorComponent";

export const ErrorContent = (props) => {

  const errorFiles = props?.batchSummary.files.filter(file => file.error_count && file.error_count);
  if (errorFiles.length === 0) {
    return (
      <div className="errorItem">
        <Text>No errors found.</Text>
      </div>
    );
  }

  return (
    <div>
      <Accordion collapsible multiple defaultValue={errorFiles.map(file => file.file_id)}>
        {errorFiles.map((file, idx) => (
          <AccordionItem key={idx} value={file.file_id}>
            <AccordionHeader>
              <TbSql className="tbSql" />
              {file.name} ({file.error_count})
            </AccordionHeader>
            <AccordionPanel>
              <ErrorComponent file/>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};