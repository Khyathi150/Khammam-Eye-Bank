from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.models import Partner
from app.schemas.schemas import PartnerOut

router = APIRouter(prefix="/partners", tags=["partners"])


@router.get("", response_model=list[PartnerOut])
def list_partners(db: Session = Depends(get_db)) -> list[Partner]:
    stmt = select(Partner).where(Partner.is_active.is_(True)).order_by(Partner.category, Partner.name)
    return list(db.scalars(stmt).all())
