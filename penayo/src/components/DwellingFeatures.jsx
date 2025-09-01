export default function DwellingFeatures({ features }) {
  return (
    <div
      className="
        flex    
        justify-start
        items-center
        w-full
        h-full
        gap-3
        flex-wrap
      "
    >
      {features?.lotSurface > 0 ? (
        <div
          className="
                flex
                flex-col
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <p className="text-xs font-normal text-left w-full text-slate-900">
            {`SUP. TOTAL`}
          </p>
          <div className="flex flex-row justify-center items-center w-full h-full gap-1">
            <p className="text-2xl font-bold text-left w-full text-primary">
              {`${features.lotSurface}`}
            </p>
            <p className="text-xs font-normal text-left w-full text-primary h-full">
              {`mt2`}
            </p>
          </div>
        </div>
      ) : null}
      {features?.coveredSurface > 0 ? (
        <div
          className="   
                flex
                flex-col
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <p className="text-xs font-normal text-left w-full text-slate-900">
            {`SUP. CUBIERTA`}
          </p>
          <div className="flex flex-row justify-center items-center w-full h-full gap-1">
            <p className="text-2xl font-bold text-left w-full text-primary">
              {`${features.coveredSurface}`}
            </p>
            <p className="text-xs font-normal text-left w-full text-primary h-full">
              {`mt2`}
            </p>
          </div>
        </div>
      ) : null}
      {features?.lotLength > 0 ? (
        <div
          className="   
                flex
                flex-col
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <p className="text-xs font-normal text-left w-full text-slate-900">
            {`FONDO`}
          </p>
          <div className="flex flex-row justify-center items-center w-full h-full gap-1">
            <p className="text-2xl font-bold text-left w-full text-primary">
              {`${features.lotLength}`}
            </p>
            <p className="text-xs font-normal text-left w-full text-primary h-full">
              {`m`}
            </p>
          </div>
        </div>
      ) : null}
      {features?.lotWidth > 0 ? (
        <div
          className="   
                flex
                flex-col
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <p className="text-xs font-normal text-left w-full text-slate-900">
            {`FRENTE`}
          </p>
          <div className="flex flex-row justify-center items-center w-full h-full gap-1">
            <p className="text-2xl font-bold text-left w-full text-primary">
              {`${features.lotWidth}`}
            </p>
            <p className="text-xs font-normal text-left w-full text-primary h-full">
              {`m`}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
