import { useEffect } from "react";
import CodeEditor from "../components/code-editor";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import Preview from "./preview";
import Resizeable from "./resizable";
import { Cells } from "../state";
import "./resizable.css";
import { useActions } from "../hooks/use-action";
import { useTypedSelector } from "../hooks/use-typed-selector";
import "./code-cell.css";
import {useCumulativeCode} from "../hooks/use-cumulative-code"



interface CodeCellProps {
  cell: Cells;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumlativeCode = useCumulativeCode(cell.id)
  

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumlativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      createBundle(cell.id, cumlativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumlativeCode, cell.id, createBundle]);

  return (
    <Resizeable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizeable direction={"horizontal"}>
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizeable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} bundlingStatus={bundle.err} />
          )}
        </div>
      </div>
    </Resizeable>
  );
};

export default CodeCell;
