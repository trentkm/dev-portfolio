// CommandPalette.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const CommandPalette = ({ onCommand, settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [swipeStart, setSwipeStart] = useState(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [lastCommand, setLastCommand] = useState(null);
  const [lastTap, setLastTap] = useState(0);
  const [isInputEnabled, setIsInputEnabled] = useState(!isMobile);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMac = navigator.platform.toLowerCase().includes("mac");

  const handleClose = () => {
    setIsOpen(false);
    setIsInputEnabled(!isMobile);
  };

  const commands = [
    {
      id: "snow",
      label: "Increase Snow Intensity",
      icon: "❄️",
      description: `Current: ${settings.snowIntensity}x`,
    },
    {
      id: "decreaseSnow",
      label: "Decrease Snowfall",
      icon: "🌨️",
      description: `Current: ${settings.snowIntensity}x`,
    },
    {
      id: "lights",
      label: "Toggle Northern Lights",
      icon: "🌌",
      description: settings.showNorthernLights ? "On" : "Off",
    },
    {
      id: "daynight",
      label: "Toggle Day/Night",
      icon: "🌓",
      description: settings.isDayTime ? "Day" : "Night",
    },
    {
      id: "wind",
      label: "Toggle Wind Effect",
      icon: "🌪️",
      description: settings.windEffect ? "On" : "Off",
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        if (!isOpen) {
          setSearch("");
          setSelectedIndex(0);
        }
      } else if (e.key === "Escape") {
        handleClose();
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : prev
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            handleSelect(filteredCommands[selectedIndex].id);
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex, filteredCommands]);

  const triggerHapticFeedback = () => {
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const handleFloatingButtonTap = () => {
    const now = Date.now();
    if (now - lastTap < 300 && lastCommand) {
      onCommand(lastCommand);
      triggerHapticFeedback();
    } else {
      setIsOpen(true);
    }
    setLastTap(now);
  };

  const handleSelect = (commandId) => {
    console.log("Command selected:", commandId);
    setLastCommand(commandId);
    onCommand(commandId);
    handleClose();
    setSearch("");
    triggerHapticFeedback();
  };

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (swipeStart === null) return;
    const offset = e.touches[0].clientY - swipeStart;
    if (offset > 0) setSwipeOffset(offset);
  };

  const handleTouchEnd = () => {
    if (swipeOffset > 100) {
      handleClose();
    }
    setSwipeOffset(0);
    setSwipeStart(null);
  };

  // Replace the current return logic with this:
  return (
    <>
      {!isOpen && (
        <FloatingButtonContainer
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FloatingButton onClick={handleFloatingButtonTap}>⌘</FloatingButton>
          {showTooltip && <Tooltip>Press {isMac ? "⌘" : "Ctrl"} + K</Tooltip>}
        </FloatingButtonContainer>
      )}

      {isOpen && (
        <Overlay onClick={handleClose}>
          <Container
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ transform: `translateY(${swipeOffset}px)` }}
          >
            <GestureHandle />
            <SearchInput
              type="text"
              placeholder="Type a command..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              readOnly={isMobile && !isInputEnabled}
              autoFocus={!isMobile}
              onClick={() => {
                if (isMobile) {
                  setIsInputEnabled(true);
                }
              }}
            />
            <CommandList>
              {filteredCommands.map((command, index) => (
                <CommandItem
                  key={command.id}
                  selected={index === selectedIndex}
                  onClick={() => handleSelect(command.id)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <CommandIcon>{command.icon}</CommandIcon>
                  <CommandContent>
                    <CommandLabel>{command.label}</CommandLabel>
                    <CommandDescription>
                      {command.description}
                    </CommandDescription>
                  </CommandContent>
                </CommandItem>
              ))}
            </CommandList>
            {isMobile && (
              <MobileTip>
                Swipe down to dismiss • Double-tap button for last command
              </MobileTip>
            )}
          </Container>
        </Overlay>
      )}
    </>
  );
};

// Updated and new styled components
const Container = styled.div`
  width: 90vw;
  max-width: 500px;
  background: rgba(23, 23, 23, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1000001;

  @media (max-width: 768px) {
    margin: 16px;
    touch-action: none;
    transition: transform 0.3s;
  }
`;

const CommandList = styled.div`
  overflow-y: visible;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
  backdrop-filter: blur(5px);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  outline: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Standard */

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  /* Optional: style for when the input is readonly */
  &[readonly] {
    cursor: default;
  }
`;

const CommandItem = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const CommandIcon = styled.span`
  font-size: 20px;
`;

const CommandContent = styled.div`
  flex: 1;
`;

const CommandLabel = styled.div`
  color: white;
  font-size: 14px;
`;

const CommandDescription = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

const GestureHandle = styled.div`
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin: 8px auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileTip = styled.div`
  text-align: center;
  padding: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

// Add these new styled components
const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const FloatingButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(46, 204, 113, 0.9);
  border: none;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: scale(1.1);
    background: rgba(46, 204, 113, 1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (hover: none) {
    -webkit-tap-highlight-color: transparent;
    &:hover {
      transform: none;
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none;
  animation: fadeIn 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 23px;
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.8);
    transform: rotate(45deg);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Optional: Add some nice animation when the tooltip appears
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Optional: You can also add a pulsing animation to the button when the page loads
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

// You can add this to the FloatingButton styled component if you want the pulse animation
const FloatingButtonWithPulse = styled(FloatingButton)`
  animation: ${pulse} 2s infinite;

  &:hover {
    animation: none;
  }
`;

export default CommandPalette;
