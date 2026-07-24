import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.core.logging import configure_logging
from app.routers import contact, health, news, partners, pledges

configure_logging()
logger = logging.getLogger(__name__)
settings = get_settings()

app = FastAPI(
    title="Khammam Eye Bank API",
    description="Backend API for the Khammam Eye Bank website — contact enquiries, "
    "pledge registrations, news and partner listings.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(contact.router, prefix="/api")
app.include_router(pledges.router, prefix="/api")
app.include_router(news.router, prefix="/api")
app.include_router(partners.router, prefix="/api")


@app.on_event("startup")
def on_startup() -> None:
    logger.info("Khammam Eye Bank API starting in %s mode", settings.environment)
