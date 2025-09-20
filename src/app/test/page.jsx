import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="relative flex items-center"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          scrollbarColor: "initial",
          scrollbarWidth: "initial",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <aside
          className="text-surface-foreground-0 z-30 flex size-full flex-col items-stretch gap-2 md:gap-4 md:rounded"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            scrollbarColor: "initial",
            scrollbarWidth: "initial",
            zIndex: 30,
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "stretch",
            color: "hsl(0 0% 97%/1)",
            gap: "1rem",
            borderRadius: "0.25rem",
          }}
        >
          <div
            className="flex gap-2 md:flex-col"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              scrollbarColor: "initial",
              scrollbarWidth: "initial",
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <div
              className="flex w-full flex-col gap-2"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                display: "flex",
                width: "100%",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                className="group/prompt bg-surface-1 border-surface-2 text-surface-foreground-1 placeholder:text-surface-foreground-3 hover:border-surface-2 relative flex h-full flex-col justify-between rounded border focus-within:!border-transparent focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 md:h-auto"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "0.25rem",
                  borderWidth: "1px",
                  borderColor: "hsl(0 0% 19%/1)",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "auto",
                }}
              >
                <div
                  className="user-select-all dynamic-prompt scrollbar-thin scrollbar-thumb-neutral-800 2xl-legacy:max-h-96 max-h-[46px] rounded px-2 pt-2 text-sm focus-visible:outline-none md:max-h-52 md:p-2 xl:max-h-72 empty"
                  contentEditable="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    letterSpacing: "0px",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    overflow: "overlay",
                    scrollbarColor: "#424242var(--scrollbar-track)",
                    padding: "0.5rem",
                    paddingTop: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingLeft: "0.5rem",
                    maxHeight: "24rem",
                    scrollbarWidth: "unset",
                    userSelect: "text",
                    height: "56px",
                  }}
                />
                <div
                  className="text-surface-foreground-4 pointer-events-none absolute inset-0 p-2 text-sm"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    pointerEvents: "none",
                    position: "absolute",
                    inset: "0px",
                    padding: "0.5rem",
                    letterSpacing: "0px",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "hsl(0 0% 69%/1)",
                  }}
                >
                  Describe your image or{" "}
                  <button
                    className="text-surface-foreground-accent-0 pointer-events-auto lowercase hover:underline"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      WebkitTapHighlightColor: "transparent",
                      margin: "0px",
                      padding: "0px",
                      fontFeatureSettings: "inherit",
                      fontVariationSettings: "inherit",
                      fontFamily: "inherit",
                      fontSize: "100%",
                      fontWeight: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "inherit",
                      appearance: "button",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      backgroundImage: "none",
                      cursor: "pointer",
                      pointerEvents: "auto",
                      textTransform: "lowercase",
                      color: "hsl(222 82% 76%/1)",
                    }}
                  >
                    Upload
                  </button>
                </div>
                <div
                  className="flex w-full items-center p-1 md:justify-between"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    padding: "0.25rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="text-surface-foreground-4 flex items-center gap-2 text-xs"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.75rem",
                      color: "hsl(0 0% 69%/1)",
                    }}
                  >
                    <span
                      className="group relative flex items-center gap-2"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <button
                        className="bg-blue-500 relative h-4 w-8 rounded-full transition-all duration-300"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          WebkitTapHighlightColor: "transparent",
                          margin: "0px",
                          padding: "0px",
                          fontFeatureSettings: "inherit",
                          fontVariationSettings: "inherit",
                          fontFamily: "inherit",
                          fontSize: "100%",
                          fontWeight: "inherit",
                          lineHeight: "inherit",
                          letterSpacing: "inherit",
                          color: "inherit",
                          textTransform: "none",
                          appearance: "button",
                          backgroundImage: "none",
                          cursor: "pointer",
                          position: "relative",
                          height: "1rem",
                          width: "2rem",
                          borderRadius: "9999px",
                          backgroundColor: "rgb(51 106 234/1)",
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.3s",
                        }}
                      >
                        <span
                          className="translate-x-4 border-blue-500 absolute left-0 top-0 h-4 w-4 rounded-full border-2 bg-white transition-all duration-300"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            height: "1rem",
                            width: "1rem",
                            transform:
                              "translate(1rem,0)rotate(0)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                            borderRadius: "9999px",
                            borderWidth: "2px",
                            borderColor: "rgb(51 106 234/1)",
                            backgroundColor: "rgb(255 255 255/1)",
                            transitionProperty: "all",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.3s",
                          }}
                        />
                      </button>{" "}
                      AI prompt{" "}
                      <span
                        className="pointer-events-none absolute bottom-full left-0 z-10 block w-44 -translate-y-2 rounded bg-neutral-800 px-2 py-1 text-xs text-neutral-100 opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          pointerEvents: "none",
                          position: "absolute",
                          bottom: "100%",
                          left: "0px",
                          zIndex: 10,
                          display: "block",
                          width: "11rem",
                          transform:
                            "translate(0,-.5rem)rotate(0)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(66 66 66/1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.75rem",
                          color: "rgb(229 229 229/1)",
                          opacity: 0,
                          boxShadow:
                            "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0px 0px 2px 0px #12121214,0px 25px 10px 0px #12121205,0px 14px 9px 0px #12121205,0px 6px 6px 0px #1212120a,0px 2px 4px 0px #12121214",
                          transitionProperty: "all",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.3s",
                        }}
                      >
                        Improve short prompts and generate diverse variations
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <button
                      id="set-seed"
                      className="flex items-center justify-center gap-2 font-semibold ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs px-2 transition-opacity duration-300 group-hover/prompt:opacity-100 md:ml-auto opacity-0"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        opacity: 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.3s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        marginLeft: "auto",
                      }}
                    >
                      <span
                        className="relative flex items-center gap-2"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <svg
                          className="pointer-events-none fill-current h-4 w-4"
                          aria-hidden="true"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                            verticalAlign: "middle",
                            display: "block",
                            pointerEvents: "none",
                            height: "1rem",
                            width: "1rem",
                            fill: "currentcolor",
                          }}
                        >
                          <use
                            xlinkHref="#icon-seed"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              scrollbarColor: "initial",
                              scrollbarWidth: "initial",
                            }}
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <span
                        className="relative flex items-center gap-2"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <svg
                          className="pointer-events-none fill-current h-4 w-4"
                          aria-hidden="true"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                            verticalAlign: "middle",
                            display: "block",
                            pointerEvents: "none",
                            height: "1rem",
                            width: "1rem",
                            fill: "currentcolor",
                          }}
                        >
                          <use
                            xlinkHref="#icon-dice"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              scrollbarColor: "initial",
                              scrollbarWidth: "initial",
                            }}
                          />
                        </svg>
                        <span
                          className="text-xs md:hidden"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                            fontSize: "0.75rem",
                            display: "none",
                          }}
                        >
                          Get inspiration
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <sider-quick-compose-btn
                  dir="ltr"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    display: "contents",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              scrollbarColor: "initial",
              scrollbarWidth: "initial",
              overflow: "hidden",
              borderRadius: "0.25rem",
            }}
          >
            <div
              className="relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                id="mode-selector"
                className="group/mode-selector text-surface-foreground-1 relative flex h-8 w-full shrink-0 items-center justify-between gap-1 px-2 md:h-10 md:w-full md:justify-center md:gap-2 md:rounded md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  justifyContent: "center",
                  gap: "0.5rem",
                  borderRadius: "0.25rem",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative hidden items-center gap-2.5 md:flex md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    alignItems: "center",
                    gap: "0.625rem",
                    display: "flex",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="flex size-7 items-center justify-center"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      width: "1.75rem",
                      height: "1.75rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      className="fill-current text-surface-foreground-3 group-hover/mode-selector:text-surface-foreground-2 size-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        width: "1rem",
                        height: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-flux"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Model
                  </span>
                </div>
                <div
                  className="text-surface-foreground-3 flex gap-1 truncate whitespace-nowrap text-xs"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    display: "flex",
                    gap: "0.25rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "0.75rem",
                    color: "hsl(0 0% 69%/1)",
                  }}
                >
                  <span
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  >
                    Flux 1.0 Fast
                  </span>
                </div>
                <svg
                  className="fill-current text-surface-foreground-2 size-3.5 shrink-0 md:block -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    width: "0.875rem",
                    height: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                    display: "block",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="text-surface-foreground-0 relative order-first flex gap-px overflow-auto rounded md:order-none md:flex-col md:overflow-visible"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              scrollbarColor: "initial",
              scrollbarWidth: "initial",
              position: "relative",
              display: "flex",
              gap: "1px",
              borderRadius: "0.25rem",
              color: "hsl(0 0% 97%/1)",
              order: 0,
              flexDirection: "column",
              overflow: "visible",
            }}
          >
            <div
              id="style"
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-style"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Style
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 opacity-100"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 1,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <button
                      id="style-reference-button"
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-3.5 w-3.5"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "0.875rem",
                          width: "0.875rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-images"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-3.5 w-3.5"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "0.875rem",
                          width: "0.875rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-shuffle"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-4 w-4"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "1rem",
                          width: "1rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-plus-medium"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
            <div
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-structure-transfer"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Composition
                  </span>
                  <span
                    className="fonft-semibold text-2xs bg-surface-foreground-accent-0/10 text-surface-foreground-accent-0 flex items-center justify-center rounded-sm px-1.5 uppercase"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0.125rem",
                      backgroundColor: "hsl(222 82% 76%/.1)",
                      paddingLeft: "0.375rem",
                      paddingRight: "0.375rem",
                      fontSize: "0.62rem",
                      textTransform: "uppercase",
                      color: "hsl(222 82% 76%/1)",
                    }}
                  >
                    New
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 opacity-100"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 1,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <button
                      id="style-reference-button"
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-3.5 w-3.5"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "0.875rem",
                          width: "0.875rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-images"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
            <div
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-effects"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Effects
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 quick-actions pointer-events-none opacity-0"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      pointerEvents: "none",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 0,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-3.5 w-3.5"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "0.875rem",
                          width: "0.875rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-shuffle"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
            <div
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-user"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Character
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 quick-actions pointer-events-none opacity-0"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      pointerEvents: "none",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 0,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-4 w-4"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "1rem",
                          width: "1rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-plus-medium"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
            <div
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-object"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Object
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 quick-actions pointer-events-none opacity-0"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      pointerEvents: "none",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 0,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <button
                      className="flex items-center justify-center gap-2 font-semibold transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:aria-pressed:cursor-default disabled:aria-pressed:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-border-10 active:outline-none bg-ghost-0 text-ghost-foreground-0 aria-pressed:bg-ghost-2 hover:enabled:bg-ghost-1 active:enabled:bg-ghost-2 rounded size-6 p-0 text-xs"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        WebkitTapHighlightColor: "transparent",
                        margin: "0px",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                        letterSpacing: "inherit",
                        textTransform: "none",
                        appearance: "button",
                        backgroundImage: "none",
                        cursor: "pointer",
                        display: "flex",
                        width: "1.5rem",
                        height: "1.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        borderRadius: "0.25rem",
                        backgroundColor: "#fff0",
                        padding: "0px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "hsl(0 0% 97%/1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter, backdrop-filter",
                        transitionDuration: "0.15s",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current h-4 w-4"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "1rem",
                          width: "1rem",
                          fill: "currentcolor",
                        }}
                      >
                        <use
                          xlinkHref="#icon-plus-medium"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
            <div
              className="group relative w-full"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                width: "100%",
              }}
            >
              <button
                className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  WebkitTapHighlightColor: "transparent",
                  margin: "0px",
                  padding: "0px",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontFamily: "inherit",
                  fontSize: "100%",
                  fontWeight: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  backgroundImage: "none",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                  color: "hsl(0 0% 90%/1)",
                  height: "2.5rem",
                  width: "100%",
                  paddingLeft: "0.75rem",
                  paddingRight: "1rem",
                }}
              >
                <div
                  className="relative flex items-center gap-2.5 md:flex-1"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    flex: "1 1 0%",
                  }}
                >
                  <span
                    className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      height: "1.75rem",
                      width: "1.75rem",
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <svg
                      className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                      aria-hidden="true"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        verticalAlign: "middle",
                        display: "block",
                        pointerEvents: "none",
                        height: "1rem",
                        width: "1rem",
                        fill: "currentcolor",
                        color: "hsl(0 0% 69%/1)",
                      }}
                    >
                      <use
                        xlinkHref="#icon-palette"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                        }}
                      />
                    </svg>
                  </span>
                  <span
                    className="whitespace-nowrap text-xs font-semibold"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Colors
                  </span>
                  <div
                    className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 quick-actions pointer-events-none opacity-0"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      pointerEvents: "none",
                      position: "absolute",
                      right: "0px",
                      zIndex: 10,
                      display: "flex",
                      width: "50%",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      opacity: 0,
                      transitionProperty: "opacity",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.3s",
                    }}
                  />
                  <div
                    className="flex flex-1 justify-end"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      display: "flex",
                      flex: "1 1 0%",
                      justifyContent: "flex-end",
                    }}
                  />
                </div>
                <svg
                  className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                  aria-hidden="true"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    verticalAlign: "middle",
                    display: "block",
                    pointerEvents: "none",
                    height: "0.875rem",
                    width: "0.875rem",
                    flexShrink: 0,
                    transform:
                      "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                    fill: "currentcolor",
                    color: "hsl(0 0% 78%/1)",
                  }}
                >
                  <use
                    xlinkHref="#icon-arrow"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                    }}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="flex gap-2"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              scrollbarColor: "initial",
              scrollbarWidth: "initial",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <div
              className="relative flex items-center gap-2 rounded md:h-10 md:w-full md:pl-3 md:pr-2 md:bg-surface-1 text-surface-foreground-1"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "0.25rem",
                color: "hsl(0 0% 90%/1)",
                height: "2.5rem",
                width: "100%",
                backgroundColor: "hsl(0 0% 11%/1)",
                paddingLeft: "0.75rem",
                paddingRight: "0.5rem",
              }}
            >
              <div
                className="hidden items-center gap-2.5 md:flex md:flex-1"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  alignItems: "center",
                  gap: "0.625rem",
                  display: "flex",
                  flex: "1 1 0%",
                }}
              >
                <div
                  className="flex h-7 w-7 items-center justify-center rounded"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    display: "flex",
                    height: "1.75rem",
                    width: "1.75rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                  }}
                >
                  <svg
                    className="pointer-events-none fill-current h-3.5 w-3.5"
                    aria-hidden="true"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      verticalAlign: "middle",
                      display: "block",
                      pointerEvents: "none",
                      height: "0.875rem",
                      width: "0.875rem",
                      fill: "currentcolor",
                    }}
                  >
                    <use
                      xlinkHref="#icon-numimg"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                      }}
                    />
                  </svg>
                </div>
              </div>
              <div
                className="bg-surface-1 flex items-center rounded"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "0.25rem",
                  backgroundColor: "hsl(0 0% 11%/1)",
                }}
              >
                <button
                  className="text-surface-foreground-3 hover:text-surface-foreground-2 px-2 py-2 md:py-3"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px",
                    padding: "0px",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontFamily: "inherit",
                    fontSize: "100%",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    backgroundImage: "none",
                    cursor: "pointer",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    color: "hsl(0 0% 69%/1)",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <svg
                    className="pointer-events-none fill-current h-3.5 w-3.5"
                    aria-hidden="true"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      verticalAlign: "middle",
                      display: "block",
                      pointerEvents: "none",
                      height: "0.875rem",
                      width: "0.875rem",
                      fill: "currentcolor",
                    }}
                  >
                    <use
                      xlinkHref="#icon-minus-min"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                      }}
                    />
                  </svg>
                </button>
                <span
                  className="text-surface-foreground-3 text-center text-xs md:w-6 w-6"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    textAlign: "center",
                    fontSize: "0.75rem",
                    color: "hsl(0 0% 69%/1)",
                    width: "1.5rem",
                  }}
                >
                  4
                </span>
                <button
                  className="text-surface-foreground-3 hover:text-surface-foreground-2 relative px-2 py-2 md:py-3"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px",
                    padding: "0px",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontFamily: "inherit",
                    fontSize: "100%",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    backgroundImage: "none",
                    cursor: "pointer",
                    position: "relative",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    color: "hsl(0 0% 69%/1)",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                  }}
                >
                  <svg
                    className="pointer-events-none fill-current h-3.5 w-3.5"
                    aria-hidden="true"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      verticalAlign: "middle",
                      display: "block",
                      pointerEvents: "none",
                      height: "0.875rem",
                      width: "0.875rem",
                      fill: "currentcolor",
                    }}
                  >
                    <use
                      xlinkHref="#icon-plus-min"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                      }}
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="w-full rounded"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                width: "100%",
                borderRadius: "0.25rem",
              }}
            >
              <div
                id="aspectRatio"
                className="group relative w-full"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  position: "relative",
                  width: "100%",
                }}
              >
                <button
                  className="text-surface-foreground-1 group relative flex h-8 w-full shrink-0 items-center justify-center gap-2 px-3 md:h-10 md:w-full md:pl-3 md:pr-4 bg-surface-1 hover:bg-surface-2"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px",
                    padding: "0px",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontFamily: "inherit",
                    fontSize: "100%",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    letterSpacing: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundImage: "none",
                    cursor: "pointer",
                    position: "relative",
                    display: "flex",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    backgroundColor: "hsl(0 0% 11%/1)",
                    color: "hsl(0 0% 90%/1)",
                    height: "2.5rem",
                    width: "100%",
                    paddingLeft: "0.75rem",
                    paddingRight: "1rem",
                  }}
                >
                  <div
                    className="relative flex items-center gap-2.5 md:flex-1"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      flex: "1 1 0%",
                    }}
                  >
                    <span
                      className="relative hidden h-7 w-7 shrink-0 items-center justify-center md:flex"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        position: "relative",
                        height: "1.75rem",
                        width: "1.75rem",
                        flexShrink: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <svg
                        className="pointer-events-none fill-current text-surface-foreground-3 group-hover:text-surface-foreground-2 h-4 w-4"
                        aria-hidden="true"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          verticalAlign: "middle",
                          display: "block",
                          pointerEvents: "none",
                          height: "1rem",
                          width: "1rem",
                          fill: "currentcolor",
                          color: "hsl(0 0% 69%/1)",
                        }}
                      >
                        <use
                          xlinkHref="#icon-square"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                          }}
                        />
                      </svg>
                    </span>
                    <div
                      className="absolute right-0 z-10 flex w-1/2 flex-1 justify-end gap-2 transition-opacity duration-300 group-hover:opacity-100 quick-actions pointer-events-none opacity-0"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        pointerEvents: "none",
                        position: "absolute",
                        right: "0px",
                        zIndex: 10,
                        display: "flex",
                        width: "50%",
                        flex: "1 1 0%",
                        justifyContent: "flex-end",
                        gap: "0.5rem",
                        opacity: 0,
                        transitionProperty: "opacity",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.3s",
                      }}
                    />
                    <div
                      className="flex flex-1 justify-end"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        display: "flex",
                        flex: "1 1 0%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        className="text-surface-foreground-3 max-w-[70px] truncate whitespace-nowrap text-xs"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          maxWidth: "70px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.75rem",
                          color: "hsl(0 0% 69%/1)",
                        }}
                      >
                        {" "}
                        1:1
                      </div>
                    </div>
                  </div>
                  <svg
                    className="pointer-events-none fill-current text-surface-foreground-2 h-3.5 w-3.5 shrink-0 -rotate-90"
                    aria-hidden="true"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      verticalAlign: "middle",
                      display: "block",
                      pointerEvents: "none",
                      height: "0.875rem",
                      width: "0.875rem",
                      flexShrink: 0,
                      transform:
                        "translate(0,0)rotate(-90deg)skewX(0)skewY(0)scaleX(1)scaleY(1)",
                      fill: "currentcolor",
                      color: "hsl(0 0% 78%/1)",
                    }}
                  >
                    <use
                      xlinkHref="#icon-arrow"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                      }}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="bg-surface-0 sticky -bottom-5 z-20 -mt-2 w-full py-2"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              scrollbarColor: "initial",
              scrollbarWidth: "initial",
              position: "sticky",
              bottom: "-1.25rem",
              zIndex: 20,
              marginTop: "-0.5rem",
              width: "100%",
              backgroundColor: "hsl(0 0% 6%/1)",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <div
              className="group relative"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                scrollbarColor: "initial",
                scrollbarWidth: "initial",
                position: "relative",
              }}
            >
              <div
                className="group/generate relative"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  scrollbarColor: "initial",
                  scrollbarWidth: "initial",
                  position: "relative",
                }}
              >
                <button
                  id="id-62ce79d9-b728-4bd5-b9ab-71860251d12d"
                  className="w-full cursor-not-allowed bg-surface-3 text-surface-foreground-3 min-h-fit h-10 px-4 text-sm font-normal flex items-center justify-center outline-none focus:outline-none rounded transition-all duration-200"
                  type="button"
                  disabled
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    scrollbarColor: "initial",
                    scrollbarWidth: "initial",
                    WebkitTapHighlightColor: "transparent",
                    margin: "0px",
                    padding: "0px",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontFamily: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundImage: "none",
                    display: "flex",
                    height: "2.5rem",
                    minHeight: "fit-content",
                    width: "100%",
                    cursor: "not-allowed",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                    backgroundColor: "hsl(0 0% 23%/1)",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    letterSpacing: "0px",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: "hsl(0 0% 69%/1)",
                    outline: "rgba(0, 0, 0, 0) solid 2px",
                    outlineOffset: "2px",
                    transitionProperty: "all",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.2s",
                  }}
                >
                  <div
                    className="w-full"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      scrollbarColor: "initial",
                      scrollbarWidth: "initial",
                      width: "100%",
                    }}
                  >
                    <div
                      className="flex w-full items-center justify-between"
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        scrollbarColor: "initial",
                        scrollbarWidth: "initial",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        className="mr-2"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          marginRight: "0.5rem",
                        }}
                      >
                        Generate
                      </span>
                      <span
                        className="relative flex items-center justify-end"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          scrollbarColor: "initial",
                          scrollbarWidth: "initial",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <svg
                          className="pointer-events-none fill-current absolute size-3.5 transition-all duration-200 ease-in-out"
                          aria-hidden="true"
                          style={{
                            border: "0px solid rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            scrollbarColor: "initial",
                            scrollbarWidth: "initial",
                            verticalAlign: "middle",
                            display: "block",
                            pointerEvents: "none",
                            position: "absolute",
                            width: "0.875rem",
                            height: "0.875rem",
                            fill: "currentcolor",
                            transitionProperty: "all",
                            transitionDuration: "0.2s",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <use
                            xlinkHref="#icon-ai-stars"
                            style={{
                              border: "0px solid rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              scrollbarColor: "initial",
                              scrollbarWidth: "initial",
                            }}
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scrollbar-color: initial;
  scrollbar-width: initial;
  text-size-adjust: 100%;
  tab-size: 4;
  line-height: 1.5;
  font-family: var(--font-sans),Inter,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}

body {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scrollbar-color: initial;
  scrollbar-width: initial;
  background-color: hsl(0 0% 6%);
  color: hsl(0 0% 97%);
  overscroll-behavior: none;
  user-select: none;
  -webkit-user-drag: none;
  margin: 0px;
  line-height: inherit;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
`,
        }}
      />
    </>
  );
}
