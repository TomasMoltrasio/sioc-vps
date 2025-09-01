export default function ServicesDwelling({ services }) {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full lg:w-1/2 p-2 gap-1">
      <h3 className="text-xl font-semibold text-center text-slate-900">
        Con que servicios cuenta?
      </h3>
      {services?.gas ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m35.9 37.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h30q0.3 0 0.5 0.3t0.2 0.5z m-5.7-23.6q0 1.7-0.5 3.2t-1.5 2.5-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-0.6 2.2q0 2.1 1.5 5l-0.1 0 0 0q-2-0.9-3.5-1.9t-3.1-2.2-2.6-2.7-1.6-3.4-0.6-4.1q0-1.7 0.6-3.2t1.4-2.5 1.9-2 2.2-1.7 1.9-1.6 1.5-1.8 0.5-2.2q0-2.1-1.5-5l0.1 0 0 0q2 0.9 3.6 1.9t3 2.2 2.6 2.7 1.6 3.4 0.6 4.1z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">Gas</p>
        </div>
      ) : null}
      {services?.water ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m19.9 25.7q0-0.8-0.4-1.5 0 0-0.4-0.5t-0.5-0.9-0.6-1-0.5-1.1q0-0.3-0.4-0.3t-0.5 0.3q-0.2 0.5-0.5 1.1t-0.5 1-0.6 0.9-0.3 0.5q-0.5 0.7-0.5 1.5 0 1.2 0.9 2t2 0.9 2-0.9 0.8-2z m11.5-2.8q0 4.7-3.4 8t-8.1 3.4-8.1-3.4-3.3-8q0-3.3 1.8-6.2 0.1-0.2 1.4-2t2.3-3.4 2.2-3.9 1.8-4.5q0.2-0.7 0.8-1.1t1.1-0.4 1.2 0.4 0.7 1.1q0.7 2 1.9 4.5t2.2 3.9 2.3 3.4 1.3 2q1.9 2.9 1.9 6.2z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            Agua Corriente
          </p>
        </div>
      ) : null}
      {services?.sewer ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m5.9 30.8l-2.5-2.5 12.5-12.5 6.6 6.7 11.8-13.3 2.3 2.4-14.1 15.9-6.6-6.7z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            Cloacas
          </p>
        </div>
      ) : null}
      {services?.phone ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m35.9 27.7q0 0.6-0.2 1.6t-0.5 1.5q-0.4 1.1-2.7 2.3-2.1 1.2-4.1 1.2-0.6 0-1.2-0.1t-1.3-0.3-1.1-0.3-1.2-0.5-1.1-0.4q-2.2-0.7-3.9-1.8-2.8-1.8-5.9-4.8t-4.8-5.9q-1.1-1.7-1.9-3.9 0-0.2-0.4-1.1t-0.4-1.3-0.3-1-0.3-1.3-0.1-1.2q0-2 1.1-4.1 1.3-2.3 2.4-2.8 0.6-0.2 1.5-0.4t1.6-0.2q0.3 0 0.5 0 0.4 0.2 1.2 1.7 0.2 0.4 0.6 1.2t0.8 1.4 0.7 1.2q0.1 0.1 0.4 0.6t0.5 0.8 0.1 0.6q0 0.5-0.6 1.1t-1.4 1.3-1.4 1.1-0.6 1.1q0 0.2 0.1 0.5t0.2 0.4 0.3 0.6 0.3 0.4q1.7 3.1 3.8 5.2t5.3 3.9q0 0 0.4 0.3t0.6 0.3 0.4 0.2 0.5 0.1q0.4 0 1-0.6t1.2-1.4 1.3-1.4 1.1-0.6q0.3 0 0.6 0.1t0.8 0.5 0.6 0.4q0.5 0.3 1.1 0.7t1.5 0.8 1.2 0.6q1.5 0.8 1.7 1.2 0 0.2 0 0.5z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            Teléfono
          </p>
        </div>
      ) : null}
      {services?.pavement ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m23.1 22.1v-0.1l-0.5-6.7q-0.1-0.2-0.3-0.4t-0.4-0.2h-3.9q-0.3 0-0.5 0.2t-0.2 0.4l-0.5 6.7v0.1q0 0.2 0.2 0.4t0.4 0.2h5.1q0.2 0 0.4-0.2t0.2-0.4z m15.7 9.7q0 1.5-0.9 1.5h-14.6q0.2 0 0.4-0.2t0.2-0.5l-0.4-5.3q-0.1-0.3-0.3-0.5t-0.4-0.2h-5.7q-0.3 0-0.5 0.2t-0.2 0.5l-0.4 5.3q0 0.3 0.2 0.5t0.4 0.2h-14.6q-1 0-1-1.5 0-1.1 0.6-2.4l8.6-21.7q0.2-0.4 0.6-0.7t0.8-0.3h7q-0.3 0-0.5 0.2t-0.2 0.5l-0.3 4q0 0.3 0.2 0.4t0.4 0.2h3.5q0.2 0 0.4-0.2t0.2-0.4l-0.3-4q-0.1-0.3-0.3-0.5t-0.4-0.2h7q0.4 0 0.8 0.3t0.5 0.7l8.7 21.7q0.5 1.3 0.5 2.4z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            Asfalto
          </p>
        </div>
      ) : null}
      {services?.electricity ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m28.8 30.2l2.3-2.2 3 2.9-2.4 2.4z m4.6-12.7h5v3.4h-5v-3.4z m-8.4-7c3 1.8 5 5 5 8.6 0 5.6-4.5 10-10 10s-10-4.4-10-10c0-3.6 2-6.8 5-8.6v-8h10v8z m-18.4 7v3.4h-5v-3.4h5z m11.8 19.9v-4.9h3.2v4.9h-3.2z m-12.5-6.5l3-3 2.4 2.3-3 3.1z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            Electricidad
          </p>
        </div>
      ) : null}
      {services?.cableTv ? (
        <div className="flex flex-row items-center gap-1">
          <svg
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
            className="align-middle fill-primary"
          >
            <g>
              <path d="m35 28.4v-20h-30v20h30z m0-23.4c1.8 0 3.4 1.6 3.4 3.4l-0.1 20c0 1.8-1.5 3.2-3.3 3.2h-8.4v3.4h-13.2v-3.4h-8.4c-1.8 0-3.4-1.4-3.4-3.2v-20c0-1.8 1.6-3.4 3.4-3.4h30z"></path>
            </g>
          </svg>
          <p className="text-base font-normal text-left text-slate-900">
            TV Cable
          </p>
        </div>
      ) : null}
    </div>
  );
}
