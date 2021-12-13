import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Input = (props, ref) => {
  const refInput = useRef();
  useImperativeHandle(ref, () => ({ focus: () => refInput.current.focus() }));
  useEffect(() => {
    refInput.current.value = props.initialValue;
  }, []);
  return (
    <input ref={refInput} onChange={(e) => props.onChange(e.target.value)} />
  );
};

const MInput = forwardRef(Input);

const Index = () => {
  const r1 = useRef();
  const r2 = useRef();

  return (
    <div>
      <MInput
        ref={r1}
        initialValue={100}
        onChange={(x) => {
          console.log(1, x);
        }}
      />
      <MInput
        ref={r2}
        initialValue={"hello"}
        onChange={(x) => {
          console.log(2, x);
        }}
      />
      <button
        onClick={() => {
          console.log(r1);
          r1.current.focus();
        }}
      >
        focus1
      </button>
      <button
        onClick={() => {
          r2.current.focus();
        }}
      >
        focus2
      </button>
    </div>
  );
};
export default Index;
