from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.models import NewsItem
from app.schemas.schemas import NewsOut

router = APIRouter(prefix="/news", tags=["news"])


@router.get("", response_model=list[NewsOut])
def list_news(db: Session = Depends(get_db)) -> list[NewsItem]:
    stmt = select(NewsItem).where(NewsItem.is_published.is_(True)).order_by(NewsItem.published_at.desc())
    return list(db.scalars(stmt).all())
