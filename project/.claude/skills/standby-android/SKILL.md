---
name: standby-android
description: Conventions for the StandBy for Samsung Android app (DreamService + Jetpack Compose, AMOLED, landscape). Use when writing or changing any code, manifest, or Gradle config for this project.
---

# StandBy Android conventions

Read `../../../Standby.txt` for the feature list and every file in `../../../rules/` before changing anything.
After code changes run `scripts/check-rules.ps1` and fix what it reports.

## DreamService
- The screen saver extends `DreamService`; set `isInteractive = true` (swipes, taps) and `isFullscreen = true` in `onAttachedToWindow`.
- Compose inside a DreamService needs manual owners: attach `LifecycleOwner`, `ViewModelStoreOwner` and `SavedStateRegistryOwner` to the `ComposeView` (the DreamService is not a ComponentActivity).
- Manifest service needs `android:permission="android.permission.BIND_DREAM_SERVICE"`, `android:exported="true"`, intent-filter action `android.service.dreams.DreamService`, and `<meta-data android:name="android.service.dream" android:resource="@xml/dream_info"/>` pointing to the settings activity.
- A button in the app opens the system screen saver settings (`Settings.ACTION_DREAM_SETTINGS`).

## UI
- Landscape only. Three columns: time/date (left), tasks (center), calendar (right).
- Black background (#000000). Pure AMOLED black, no gray surfaces.
- Pixel shift: move the whole layout by a few px once per minute.
- Night mode: dim by the light sensor, switch digits to red.
- Large time digits as separate blocks (hours, minutes, seconds) with digit-change animation.

## Data
- Tasks: Room (title, description, createdAt, updatedAt, done). Google Tasks is an optional source.
- Calendar: `CalendarContract`, runtime permission `READ_CALENDAR`.
- Weather: Open-Meteo, no API key.
- Settings: DataStore.
- Music: `MediaSessionManager.getActiveSessions` with a `NotificationListenerService` component.

## Code style
- One feature per package: `clock`, `tasks`, `calendar`, `weather`, `media`, `settings`.
- Composables are stateless where possible; state lives in a ViewModel or a state holder.
- No new dependencies without saying why.
