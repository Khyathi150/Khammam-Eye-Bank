import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isWithinInaugurationWindow } from '@/utils/inaugurationSchedule';
import logo from '@/assets/icons/eye_logo.png';

interface InaugurationModalProps {
  /**
   * Optional manual override for testing/previewing the modal.
   * If not provided, it dynamically checks `isWithinInaugurationWindow()`.
   */
  forceShow?: boolean;
  /**
   * Callback fired when the modal is dismissed.
   */
  onClose?: () => void;
}

type ParticleShape = 'rect' | 'ribbon' | 'circle' | 'diamond';
type ParticleLayer = 'back' | 'front';

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  opacity: number;
  decay: number;
  gravity: number;
  drag: number;
  wobble: number;
  wobbleSpeed: number;
  shape: ParticleShape;
  layer: ParticleLayer;
}

interface StarTwinkle {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  progress: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
  layer: ParticleLayer;
}

interface SparkArc {
  originX: number;
  originY: number;
  angle: number;
  length: number;
  maxDistance: number;
  distance: number;
  speed: number;
  color: string;
  alpha: number;
  decay: number;
  curve: number;
  layer: ParticleLayer;
}

interface AmbientDust {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  pulseSpeed: number;
}

export default function InaugurationModal({
  forceShow,
  onClose
}: InaugurationModalProps) {
  // Check if current IST time is inside an active inauguration window
  const shouldDisplay = forceShow !== undefined ? forceShow : isWithinInaugurationWindow();
  const [isOpen, setIsOpen] = useState(shouldDisplay);

  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const frontCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const primaryButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  // Keyboard accessibility (Escape key to dismiss) & Focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Subtle focus shift to primary button for keyboard and screen reader users
    const timer = setTimeout(() => {
      primaryButtonRef.current?.focus();
    }, 450);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, handleClose]);

  // Rich Multi-Layered Celebration Animation Engine
  useEffect(() => {
    if (!isOpen) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const backCanvas = backCanvasRef.current;
    const frontCanvas = frontCanvasRef.current;
    if (!backCanvas || !frontCanvas) return;

    const backCtx = backCanvas.getContext('2d');
    const frontCtx = frontCanvas.getContext('2d');
    if (!backCtx || !frontCtx) return;

    let animationFrameId: number;
    let isRunning = true;

    // High DPI Support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvases = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      backCanvas.width = width * dpr;
      backCanvas.height = height * dpr;
      backCanvas.style.width = `${width}px`;
      backCanvas.style.height = `${height}px`;
      backCtx.scale(dpr, dpr);

      frontCanvas.width = width * dpr;
      frontCanvas.height = height * dpr;
      frontCanvas.style.width = `${width}px`;
      frontCanvas.style.height = `${height}px`;
      frontCtx.scale(dpr, dpr);
    };

    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    // Curated Khammam Eye Bank Palette: Deep Navy, Azure, Secondary Teal, Warm Gold, Radiant Amber, Pearl, Crisp White
    const palette = [
      '#0B3C5D', // Navy
      '#155A85', // Mid Navy / Azure
      '#0F766E', // Secondary Teal
      '#D97706', // Warm Gold Accent
      '#F59E0B', // Radiant Gold
      '#FBBF24', // Amber Glow
      '#FEF3C7', // Soft Ivory / Pearl
      '#FFFFFF'  // Pure White
    ];

    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;

    const confettiList: ConfettiParticle[] = [];
    const twinkleList: StarTwinkle[] = [];
    const arcList: SparkArc[] = [];
    const ambientDustList: AmbientDust[] = [];

    // Initialize ambient background floating particles (subtle luminous dust)
    const ambientCount = isMobile ? 14 : isTablet ? 22 : 32;
    for (let i = 0; i < ambientCount; i++) {
      ambientDustList.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1 + Math.random() * (isMobile ? 1.8 : 2.5),
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.15 - Math.random() * 0.35,
        color: Math.random() > 0.4 ? '#F59E0B' : '#60A5FA',
        alpha: 0.1 + Math.random() * 0.25,
        targetAlpha: 0.15 + Math.random() * 0.4,
        pulseSpeed: 0.015 + Math.random() * 0.02
      });
    }

    // Helper to spawn a wave of confetti
    const spawnConfettiWave = (
      count: number,
      sourceRatio: 'corners' | 'surround',
      speedMultiplier = 1
    ) => {
      const centerX = width / 2;
      const modalTopY = Math.max(100, height * 0.32);
      const modalWidth = isMobile ? Math.min(width * 0.88, 380) : Math.min(width * 0.85, 480);
      const leftCornerX = centerX - modalWidth * 0.46;
      const rightCornerX = centerX + modalWidth * 0.46;

      for (let i = 0; i < count; i++) {
        let startX: number;
        let startY: number;
        let angle: number;
        const isLeft = i % 2 === 0;

        if (sourceRatio === 'corners') {
          // Launch from top-left and top-right corners of the modal
          startX = isLeft
            ? leftCornerX + (Math.random() - 0.5) * 40
            : rightCornerX + (Math.random() - 0.5) * 40;
          startY = modalTopY - 20 + (Math.random() - 0.5) * 50;

          // Outward and upward trajectory
          angle = isLeft
            ? Math.PI * 1.12 + Math.random() * 0.65 // Leftward & Upward
            : Math.PI * 1.25 + Math.random() * 0.65; // Rightward & Upward
        } else {
          // Surround / center launch
          startX = centerX + (Math.random() - 0.5) * (modalWidth * 0.85);
          startY = modalTopY - 30 + (Math.random() - 0.5) * 40;
          angle = Math.PI * 1.1 + Math.random() * 0.8;
        }

        const baseSpeed = isMobile ? 4 + Math.random() * 6.5 : 5.5 + Math.random() * 9.5;
        const speed = baseSpeed * speedMultiplier;

        const shapeRoll = Math.random();
        let shape: ParticleShape = 'rect';
        let pWidth = 6 + Math.random() * 7;
        let pHeight = 4 + Math.random() * 5;

        if (shapeRoll > 0.78) {
          shape = 'ribbon';
          pWidth = 14 + Math.random() * 10;
          pHeight = 3 + Math.random() * 2.5;
        } else if (shapeRoll > 0.55) {
          shape = 'diamond';
          pWidth = 7 + Math.random() * 6;
          pHeight = 7 + Math.random() * 6;
        } else if (shapeRoll > 0.4) {
          shape = 'circle';
          pWidth = 5 + Math.random() * 5;
          pHeight = pWidth;
        }

        // Layer separation: 45% behind modal, 55% in front for realistic 3D depth
        const layer: ParticleLayer = Math.random() > 0.45 ? 'front' : 'back';

        confettiList.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed + (isLeft ? -1.8 : 1.8),
          vy: Math.sin(angle) * speed - (3 + Math.random() * 3.5),
          width: pWidth,
          height: pHeight,
          color: palette[Math.floor(Math.random() * palette.length)],
          rotX: Math.random() * Math.PI * 2,
          rotY: Math.random() * Math.PI * 2,
          rotZ: Math.random() * Math.PI * 2,
          rotSpeedX: (Math.random() - 0.5) * 0.22,
          rotSpeedY: (Math.random() - 0.5) * 0.22,
          rotSpeedZ: (Math.random() - 0.5) * 0.12,
          opacity: 0.98,
          decay: 0.0028 + Math.random() * 0.0035,
          gravity: 0.13 + Math.random() * 0.06,
          drag: 0.981,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.04 + Math.random() * 0.05,
          shape,
          layer
        });
      }
    };

    // Helper to spawn glittering star twinkles around the modal perimeter
    const spawnTwinkle = (count: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const modalW = isMobile ? Math.min(width * 0.9, 380) : Math.min(width * 0.85, 490);
      const modalH = isMobile ? 380 : 440;

      for (let i = 0; i < count; i++) {
        // Position along the outer boundary / aura of the modal
        const angle = Math.random() * Math.PI * 2;
        const radiusX = (modalW / 2) * (0.8 + Math.random() * 0.55);
        const radiusY = (modalH / 2) * (0.8 + Math.random() * 0.55);

        twinkleList.push({
          x: centerX + Math.cos(angle) * radiusX,
          y: centerY + Math.sin(angle) * radiusY,
          size: 0,
          maxSize: 6 + Math.random() * 9,
          color: Math.random() > 0.3 ? '#F59E0B' : '#FFFFFF',
          alpha: 0,
          maxAlpha: 0.85 + Math.random() * 0.15,
          progress: 0,
          speed: 0.022 + Math.random() * 0.025,
          rotation: Math.random() * Math.PI,
          rotSpeed: 0.03 + Math.random() * 0.04,
          layer: Math.random() > 0.35 ? 'front' : 'back'
        });
      }
    };

    // Helper to spawn curved spark streaks
    const spawnSparkArcs = (count: number) => {
      const centerX = width / 2;
      const modalTopY = Math.max(100, height * 0.32);

      for (let i = 0; i < count; i++) {
        const isLeft = i % 2 === 0;
        const angle = isLeft
          ? Math.PI * 1.08 + Math.random() * 0.5
          : Math.PI * 1.42 + Math.random() * 0.5;

        arcList.push({
          originX: centerX + (isLeft ? -120 : 120),
          originY: modalTopY,
          angle,
          length: 12 + Math.random() * 16,
          maxDistance: (isMobile ? 120 : 200) + Math.random() * 80,
          distance: 0,
          speed: 4.5 + Math.random() * 3.5,
          color: Math.random() > 0.4 ? '#FBBF24' : '#60A5FA',
          alpha: 0.9,
          decay: 0.016 + Math.random() * 0.012,
          curve: (Math.random() - 0.5) * 0.04,
          layer: 'front'
        });
      }
    };

    // Orchestrated Wave Timing:
    // 0.15s: First major confetti burst + spark arcs
    const wave1Timer = setTimeout(() => {
      const count = isMobile ? 48 : isTablet ? 72 : 96;
      spawnConfettiWave(count, 'corners', 1.05);
      spawnSparkArcs(isMobile ? 4 : 8);
      spawnTwinkle(isMobile ? 6 : 12);
    }, 150);

    // 0.70s: Sparkles & star twinkles intensify around the modal
    const twinkleTimer = setTimeout(() => {
      spawnTwinkle(isMobile ? 8 : 16);
    }, 700);

    // 0.90s: Second celebratory wave (smaller, continuous celebration feel)
    const wave2Timer = setTimeout(() => {
      const count = isMobile ? 26 : isTablet ? 40 : 54;
      spawnConfettiWave(count, 'surround', 0.88);
      spawnSparkArcs(isMobile ? 3 : 6);
      spawnTwinkle(isMobile ? 6 : 10);
    }, 900);

    // 1.20s: Final celebratory sparkles
    const finalSparkleTimer = setTimeout(() => {
      spawnTwinkle(isMobile ? 5 : 8);
    }, 1200);

    // Main Canvas Render Loop
    const render = () => {
      if (!isRunning) return;

      // Clear both back and front canvases
      backCtx.clearRect(0, 0, width, height);
      frontCtx.clearRect(0, 0, width, height);

      // 1. Render Ambient Background Floating Orbs
      ambientDustList.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        // Wrap edges smoothly
        if (d.y < -10) d.y = height + 10;
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;

        d.alpha += Math.sin(performance.now() * d.pulseSpeed) * 0.004;
        const currentAlpha = Math.max(0.05, Math.min(0.45, d.alpha));

        backCtx.save();
        backCtx.globalAlpha = currentAlpha;
        backCtx.fillStyle = d.color;
        backCtx.beginPath();
        backCtx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        backCtx.fill();
        backCtx.restore();
      });

      // 2. Render & Update Confetti Particles
      for (let i = confettiList.length - 1; i >= 0; i--) {
        const p = confettiList[i];

        if (p.opacity <= 0.01 || p.y > height + 40) {
          confettiList.splice(i, 1);
          continue;
        }

        // Physics
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.65;
        p.y += p.vy;

        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;
        p.opacity -= p.decay;

        const ctx = p.layer === 'back' ? backCtx : frontCtx;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotZ);

        // 3D Tumbling simulation using trigonometric scale factors
        const scaleX = Math.cos(p.rotX);
        const scaleY = Math.cos(p.rotY);
        ctx.scale(scaleX, scaleY);

        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -p.height);
          ctx.lineTo(p.width * 0.7, 0);
          ctx.lineTo(0, p.height);
          ctx.lineTo(-p.width * 0.7, 0);
          ctx.closePath();
          ctx.fill();
        } else if (p.shape === 'ribbon') {
          ctx.beginPath();
          // Curvature on ribbon for natural flutter
          ctx.moveTo(-p.width / 2, -p.height / 2);
          ctx.quadraticCurveTo(0, p.height * 0.8, p.width / 2, -p.height / 2);
          ctx.lineTo(p.width / 2, p.height / 2);
          ctx.quadraticCurveTo(0, -p.height * 0.8, -p.width / 2, p.height / 2);
          ctx.closePath();
          ctx.fill();
        } else {
          // Standard Confetti Rectangle with subtle rounded corners
          ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        }

        ctx.restore();
      }

      // 3. Render Curved Spark Arcs
      for (let i = arcList.length - 1; i >= 0; i--) {
        const arc = arcList[i];
        arc.distance += arc.speed;
        arc.angle += arc.curve;
        arc.alpha -= arc.decay;

        if (arc.alpha <= 0.02 || arc.distance >= arc.maxDistance) {
          arcList.splice(i, 1);
          continue;
        }

        const currentX = arc.originX + Math.cos(arc.angle) * arc.distance;
        const currentY = arc.originY + Math.sin(arc.angle) * arc.distance;
        const prevX = arc.originX + Math.cos(arc.angle) * Math.max(0, arc.distance - arc.length);
        const prevY = arc.originY + Math.sin(arc.angle) * Math.max(0, arc.distance - arc.length);

        frontCtx.save();
        frontCtx.globalAlpha = Math.max(0, arc.alpha);
        frontCtx.strokeStyle = arc.color;
        frontCtx.lineWidth = isMobile ? 1.5 : 2.2;
        frontCtx.lineCap = 'round';
        frontCtx.beginPath();
        frontCtx.moveTo(prevX, prevY);
        frontCtx.lineTo(currentX, currentY);
        frontCtx.stroke();
        frontCtx.restore();
      }

      // 4. Render Star Twinkles (✦ 4-point radiant star)
      for (let i = twinkleList.length - 1; i >= 0; i--) {
        const star = twinkleList[i];
        star.progress += star.speed;
        star.rotation += star.rotSpeed;

        if (star.progress >= 1) {
          twinkleList.splice(i, 1);
          continue;
        }

        // Sinusoidal ease in-out for alpha & scale
        const curve = Math.sin(star.progress * Math.PI);
        const curSize = star.maxSize * curve;
        const curAlpha = star.maxAlpha * curve;

        const ctx = star.layer === 'back' ? backCtx : frontCtx;

        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(star.rotation);
        ctx.globalAlpha = Math.max(0, curAlpha);
        ctx.fillStyle = star.color;

        // Draw crisp 4-point star
        ctx.beginPath();
        ctx.moveTo(0, -curSize);
        ctx.quadraticCurveTo(0, 0, curSize, 0);
        ctx.quadraticCurveTo(0, 0, 0, curSize);
        ctx.quadraticCurveTo(0, 0, -curSize, 0);
        ctx.quadraticCurveTo(0, 0, 0, -curSize);
        ctx.closePath();
        ctx.fill();

        // Inner glowing core
        ctx.beginPath();
        ctx.fillStyle = '#FFFFFF';
        ctx.arc(0, 0, curSize * 0.28, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      clearTimeout(wave1Timer);
      clearTimeout(twinkleTimer);
      clearTimeout(wave2Timer);
      clearTimeout(finalSparkleTimer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvases);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inauguration-title"
          aria-describedby="inauguration-desc"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* 0.0s: Backdrop with smooth blur & darkening */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Background Layer: Confetti & Ambient Particles Behind Modal */}
          <canvas
            ref={backCanvasRef}
            className="pointer-events-none fixed inset-0 z-[101]"
            aria-hidden="true"
          />

          {/* 0.1s: Subtle Celebratory Radial Light Burst & Warm Aura Behind Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: [0, 0.95, 0.75], scale: [0.65, 1.25, 1.1] }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute z-[101] h-[340px] w-[340px] sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-tr from-amber-400/30 via-primary/35 to-secondary/25 blur-3xl"
            aria-hidden="true"
          />

          {/* 0.2s: Main Modal Container - Smooth Spring Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 280,
              mass: 0.9,
              delay: 0.2
            }}
            className="relative z-[102] w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 md:p-9 shadow-[0_25px_70px_-15px_rgba(11,60,93,0.38),0_0_0_1px_rgba(217,119,6,0.2)] overflow-hidden border border-amber-100/90 text-center"
          >
            {/* Top gold & navy metallic accent ribbon */}
            <div
              className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary"
              aria-hidden="true"
            />

            {/* One-time subtle luxury sheen sweep */}
            <motion.div
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '220%', opacity: [0, 0.45, 0.45, 0] }}
              transition={{ duration: 1.3, delay: 0.7, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-0 z-20 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent"
              aria-hidden="true"
            />

            {/* Close Button (X) */}
            <button
              onClick={handleClose}
              className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-30 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/80 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-accent"
              aria-label="Close inauguration announcement"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Brand Crest / Eye Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28, duration: 0.45, ease: 'easeOut' }}
              className="relative mx-auto mb-4 sm:mb-5 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center"
            >
              {/* Outer decorative ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/25 via-primary/10 to-amber-500/30 p-1 ring-1 ring-amber-300/70 shadow-sm"
                aria-hidden="true"
              />

              {/* Inner logo badge */}
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white shadow-inner">
                <img
                  src={logo}
                  alt="The Khammam Eye Bank"
                  className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
                />
              </div>

              {/* Subtle sparkle accents on emblem */}
              <span
                className="absolute -top-1 -right-1 text-amber-500 text-xs animate-pulse"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="absolute -bottom-1 -left-1 text-amber-400 text-xs animate-pulse"
                style={{ animationDelay: '600ms' }}
                aria-hidden="true"
              >
                ✦
              </span>
            </motion.div>

            {/* 0.35s: "Congratulations!" Tag Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mb-2.5"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-900 shadow-sm">
                <span className="text-amber-500 text-[10px]" aria-hidden="true">★</span>
                Congratulations!
                <span className="text-amber-500 text-[10px]" aria-hidden="true">★</span>
              </span>
            </motion.div>

            {/* 0.55s: Heading: "The Khammam Eye Bank Website is Launched!" */}
            <motion.h2
              id="inauguration-title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.45 }}
              className="font-heading text-2xl sm:text-3xl font-extrabold text-primary tracking-tight leading-snug px-1"
            >
              The Khammam Eye Bank Website is Launched!
            </motion.h2>

            {/* Refined Divider Flourish */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="my-3 sm:my-4 flex items-center justify-center gap-2 text-amber-500/80"
              aria-hidden="true"
            >
              <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-amber-300" />
              <svg
                className="h-3 w-3 text-accent fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-amber-300" />
            </motion.div>

            {/* Launch Subtitle */}
            <motion.p
              id="inauguration-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.45 }}
              className="font-body text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto mb-6 sm:mb-7"
            >
              Celebrating a new digital presence dedicated to the gift of sight.
            </motion.p>

            {/* Action Area: "Continue to Website" */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <button
                ref={primaryButtonRef}
                onClick={handleClose}
                className="group w-full sm:w-auto min-h-[46px] px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-heading font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lift flex items-center justify-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>Continue to Website</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Foreground Layer: Confetti, Twinkles & Arcs in front of Modal Edges */}
          <canvas
            ref={frontCanvasRef}
            className="pointer-events-none fixed inset-0 z-[103]"
            aria-hidden="true"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
