import { useState } from "react";
import {
  PROFILE_PHOTO,
  profilePhotoOverlay,
} from "../../data/profile";

export default function ProfilePhotoCard() {
  const [hasError, setHasError] = useState(false);

  return (
    <section className="bento-card bento-card-hover overflow-hidden p-0 md:col-span-6 lg:col-span-2">
      <div className="relative h-full min-h-64 sm:min-h-72 lg:min-h-0">
        {hasError ? (
          <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 bg-muted/30 p-6 text-center lg:min-h-full">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Profile photo
            </p>
            <p className="text-sm text-muted-foreground">
              Upload to{" "}
              <span className="font-mono text-foreground">
                public/profile-photo.jpg
              </span>
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              800 × 1000 px · JPG or WebP
            </p>
          </div>
        ) : (
          <img
            src={PROFILE_PHOTO}
            alt="Luthfi Herianda"
            className="h-full min-h-72 w-full object-cover object-center lg:min-h-full"
            onError={() => setHasError(true)}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/80 to-transparent p-5 pt-16">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {profilePhotoOverlay.tagline}
          </p>
          <p className="font-display text-lg font-semibold tracking-tight">
            {profilePhotoOverlay.name}
          </p>
        </div>
      </div>
    </section>
  );
}
